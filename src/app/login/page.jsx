"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { loginWithEmail, loginWithGoogle } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // demo login
  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   // Demo: replace with your actual login logic
  //   alert("Logged in successfully (demo)!");
  //   router.push("/");
  // };

  //next auth login with email and password
//   const handleLogin = async (e) => {
//   e.preventDefault();

//   const result = await signIn("credentials", {
//     redirect: false,
//     email,
//     password,
//   });

//   if (result?.ok) {
//     router.push("/");
//   } else {
//     alert("Invalid email or password");
//   }
// };


  //next auth google login
  // const handleGoogleLogin = async () => {
  //   await signIn("google", { callbackUrl: "/" });
  // };

  // firebase Email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginWithEmail(email, password);
      console.log("Logged in user:", user);
      router.push("/"); // Redirect after login
    } catch (error) {
      console.error(error);
      alert(error.message || "Invalid email or password");
    }
  };


  //firebase google login
  const handleGoogleLogin = async () => {
  try {
    const user = await loginWithGoogle();
    console.log("Logged in with Google:", user);
    // Redirect user after login
    router.push("/");
  } catch (error) {
    console.error("Google login failed:", error);
    alert("Google login failed. Try again.");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {/* Header with logo and title */}
        <div className="text-center mb-6">
          <span className="font-bold text-2xl text-indigo-600">CourseManager</span>
          <h1 className="text-3xl font-bold mt-2 text-black">Login to Your Account</h1>
          <p className="text-gray-500 mt-1">Access your courses and manage your learning</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <label className="block text-gray-600 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
             <label className="block text-gray-600 font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border p-2 rounded w-full pr-10 text-black"
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

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
          >
            Login
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
          Login with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account? <Link href="/register" className="text-indigo-600">Register</Link>
        </p>
      </div>
    </div>
  );
}
