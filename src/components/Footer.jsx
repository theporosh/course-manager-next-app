
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <span className="font-bold text-2xl text-indigo-600">CourseManager</span>
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-white">Community</h3>
                        <Link href="/" className="hover:text-indigo-400">Learners</Link>
                        <Link href="/" className="hover:text-indigo-400">Partners</Link>
                        <Link href="/" className="hover:text-indigo-400">Blog</Link>
                        <Link href="/" className="hover:text-indigo-400">Tech Blog</Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                        <div className="flex space-x-4 mt-1">
                            <a href="#" className="hover:text-indigo-400"><FaFacebookF /></a>
                            <a href="#" className="hover:text-indigo-400"><FaSquareXTwitter /></a>
                            <a href="#" className="hover:text-indigo-400"><FaInstagram /></a>
                            <a href="#" className="hover:text-indigo-400"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Contact info / optional */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <p>Email: support@coursemanager.com</p>
                        <p>Phone: +880 123 456 789</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} CourseManager. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
