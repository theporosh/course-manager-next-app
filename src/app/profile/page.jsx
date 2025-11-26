"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { listenAuthState } from "@/lib/auth"; // Firebase auth listener

export default function ProfileSection() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = listenAuthState((currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    if (!user) {
        return (
            <div className="p-4 text-center text-gray-500">
                Loading profile...
            </div>
        );
    }

    // Check if the URL is valid AND in allowed domains
    const allowedDomains = [
        'i.ibb.co.com',
        'images.unsplash.com',
        'lh3.googleusercontent.com',
        'img.icons8.com'
    ];


    const isValidRemoteUrl = (url) => {
        try {
            const parsed = new URL(url);
            return allowedDomains.includes(parsed.hostname);
        } catch {
            return false;
        }
    };

    const profileImage = isValidRemoteUrl(user.photoURL)
        ? user.photoURL
        : "/avatar.png"; // local fallback image

    return (
        <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-md flex flex-col items-center gap-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                    src={profileImage}
                    alt={user.displayName || "User Profile"}
                    fill
                    className="object-cover"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 96px"
                />
            </div>

            <h2 className="text-xl font-semibold">{user.name || "User"}</h2>
            <p className="text-gray-500">{user.email}</p>

            {user.phoneNumber && (
                <p className="text-gray-500">Phone: {user.phoneNumber}</p>
            )}
        </div>
    );
}
