// src/app/api/auth/register/route.js
import clientPromise from "@/lib/db";
import { hash } from "bcryptjs";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, password, photoURL } = body;

        if (!name || !email || !password) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("courseManagerDB");
        const users = db.collection("users");

        // check if exists
        const existing = await users.findOne({ email });
        if (existing) {
            return new Response(JSON.stringify({ error: "User already exists" }), { status: 409 });
        }

        const hashed = await hash(password, 10);

        const newUser = {
            name,
            email,
            password: hashed,
            photoURL: photoURL || null,
            provider: "credentials",
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        await users.insertOne(newUser);

        return new Response(JSON.stringify({ success: true }), { status: 201 });
    } catch (err) {
        console.error("Register error:", err);
        return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
    }
}
