// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import clientPromise from "@/lib/db";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        CredentialsProvider({
            name: "Email and Password",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) return null;

                const client = await clientPromise;
                const db = client.db("courseManagerDB");
                const user = await db.collection("users").findOne({ email: credentials.email });

                if (!user) {
                    // no user
                    return null;
                }

                // user found — compare hashed password
                const isValid = await compare(credentials.password, user.password || "");
                if (!isValid) return null;

                // return user object (NextAuth will include this in token)
                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    image: user.photoURL || null,
                };
            },
        }),
    ],

    pages: {
        signIn: "/login", // your login page path
    },

    callbacks: {
        // called on sign in (for OAuth we upsert the user into our DB)
        async signIn({ user, account, profile, email, credentials }) {
            try {
                if (account?.provider === "google") {
                    const client = await clientPromise;
                    const db = client.db("courseManagerDB");

                    // profile contains Google profile info
                    const filter = { email: user.email };
                    const update = {
                        $set: {
                            name: user.name ?? profile?.name,
                            email: user.email,
                            photoURL: user.image ?? profile?.picture,
                            provider: "google",
                            updatedAt: new Date(),
                        },
                        $setOnInsert: {
                            createdAt: new Date(),
                        },
                    };

                    await db.collection("users").updateOne(filter, update, { upsert: true });
                }
                return true;
            } catch (err) {
                console.error("Error in signIn callback:", err);
                return false;
            }
        },

        // include user in JWT
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },

        // make session.user contain token.user
        async session({ session, token }) {
            if (token?.user) {
                session.user = token.user;
            }
            return session;
        },

        // redirect after sign in
        async redirect({ url, baseUrl }) {
            return "/";
        },
    },

    session: {
        strategy: "jwt",
    },

    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
