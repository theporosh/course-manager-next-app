"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { listenAuthState, logout } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = listenAuthState((currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);


    // logout without toast
    // const handleLogout = async () => {
    //     try {
    //         await logout(); // Firebase signOut
    //         setIsOpen(false); // close dropdown
    //         router.push("/login"); // redirect to login page
    //     } catch (err) {
    //         console.error("Logout failed:", err);
    //     }
    // };

    // logout with toast
    const handleLogout = async () => {
        try {
            await logout(); // Firebase signOut
            setIsOpen(false);

            Swal.fire({
                icon: "success",
                title: "Logged Out Successfully!",
                toast: true,
                position: "top-right",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });

            router.push("/login");
        } catch (err) {
            console.error("Logout failed:", err);

            Swal.fire({
                icon: "error",
                title: "Logout Failed!",
                text: err.message || "Try again",
                toast: true,
                position: "top-right",
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
            });
        }
    };


    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <span className="font-bold text-2xl text-indigo-600">CourseManager</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <Link href="/" className="hover:text-indigo-600 text-gray-500">Home</Link>
                        <Link href="/items" className="hover:text-indigo-600 text-gray-500">Catalog</Link>
                        <Link href="/about" className="hover:text-indigo-600 text-gray-500">About</Link>
                        <Link href="/contact" className="hover:text-indigo-600 text-gray-500">Support</Link>

                        {!user ? (
                            <>
                                <Link href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Login</Link>
                                <Link href="/register" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Register</Link>
                            </>
                        ) : (
                            <div className="relative">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center space-x-2 px-4 py-2 border rounded hover:bg-gray-100"
                                >
                                    <span>{user.name}</span>
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                {isOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                                        <Link href="/add-course" className="block px-4 py-2 hover:bg-gray-100">Add Course</Link>
                                        <Link href="/manage-products" className="block px-4 py-2 hover:bg-gray-100">Manage Products</Link>
                                        <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                                        <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100">Logout</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                    <Link href="/" className="block px-3 py-2 rounded hover:bg-gray-100">Home</Link>
                    <Link href="/items" className="block px-3 py-2 rounded hover:bg-gray-100">Catalog</Link>
                    <Link href="/about" className="block px-3 py-2 rounded hover:bg-gray-100">About</Link>
                    <Link href="/contact" className="block px-3 py-2 rounded hover:bg-gray-100">Support</Link>

                    {!user ? (
                        <>
                            <Link href="/login" className="block px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">Login</Link>
                            <Link href="/register" className="block px-3 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300">Register</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/add-course" className="block px-3 py-2 rounded hover:bg-gray-100">Add Course</Link>
                            <Link href="/manage-products" className="block px-3 py-2 rounded hover:bg-gray-100">Manage Products</Link>
                            <Link href="/profile" className="block px-3 py-2 rounded hover:bg-gray-100">Profile</Link>
                            <button onClick={handleLogout} className="block px-3 py-2 rounded hover:bg-gray-100">Logout</button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
