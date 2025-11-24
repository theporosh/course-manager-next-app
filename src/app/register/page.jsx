"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const validatePassword = (password) => {
        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter";
        }
        if (password.length < 6) {
            return "Password must be at least 6 characters long";
        }
        return "";
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const error = validatePassword(password);
        if (error) {
            setPasswordError(error);
            return;
        }

        // Clear error if validation passed
        setPasswordError("");

        // Demo: Here you would normally call your backend to save the user
        alert("Registered successfully (demo)!");
        router.push("/auth/login");
    };

    const handleGoogleLogin = async () => {
        await signIn("google", { callbackUrl: "/" });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                {/* Header */}
                <h1 className="text-3xl font-bold text-indigo-600 text-center">CourseManager </h1>
                 <h1 className="text-3xl font-bold mt-2 text-black">Create Your First Account</h1>
                <p className="text-center text-gray-500 mt-1 mb-6">Create your account and start learning today!</p>

                {/* Register Form */}
                <form onSubmit={handleRegister} className="flex flex-col space-y-4">
                    <label className="block text-gray-600 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border p-2 rounded text-black"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label className="block text-gray-600 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-2 rounded text-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                     <label className="block text-gray-600 font-medium mb-1">Photo URL</label>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        className="border p-2 rounded text-black"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                    />
                    <div className="relative">
                         <label className="block text-gray-600 font-medium mb-1">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className={`border p-2 rounded w-full pr-10 text-black ${passwordError ? "border-red-500" : ""}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-10 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                        </button>
                    </div>
                    {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}

                    <button
                        type="submit"
                        className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
                    >
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="my-4 flex items-center">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-2 text-gray-400">OR</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                {/* Google login */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 flex justify-center items-center gap-2"
                >
                    <svg className="w-5 h-5" viewBox="0 0 48 48">
                        <path
                            fill="#fff"
                            d="M44.5 20H24v8.5h11.9C34.3 33.3 30.6 36 24 36c-7.7 0-14-6.3-14-14s6.3-14 14-14c3.6 0 6.7 1.3 9.2 3.4l6.5-6.5C36.8 4.4 30.8 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c12.4 0 21.3-8.8 21.3-21.3 0-1.4-.2-2.6-.8-3.7z"
                        />
                    </svg>
                    Register with Google
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <Link href="/login" className="text-indigo-600">Login</Link>
                </p>
            </div>
        </div>
    );
}
