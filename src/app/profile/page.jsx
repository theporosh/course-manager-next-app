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

    return (
        <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-md flex flex-col items-center gap-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                    src={user.photoURL || "/default_profile.png"}
                    alt={user.displayName || "User Profile"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 96px"
                />
            </div>

            <h2 className="text-xl font-semibold">{user.displayName || "User"}</h2>
            <p className="text-gray-500">{user.email}</p>

            {user.phoneNumber && (
                <p className="text-gray-500">Phone: {user.phoneNumber}</p>
            )}
        </div>
    );
}
