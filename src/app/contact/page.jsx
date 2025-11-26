"use client";
import Image from "next/image";
import Swal from "sweetalert2";

export default function ContactPage() {

    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            toast: true,
            icon: "success",
            title: "Message sent successfully!",
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
        });

        e.target.reset(); 
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center mb-4">
                Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-gray-600 text-center mb-12">
                Have questions? We are here to help you anytime!
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="relative h-[350px] w-full rounded-xl shadow-lg overflow-hidden">
                    <Image
                        src="/support_team.webp"
                        alt="Support team"
                        fill
                        className="object-cover"
                        loading="eager"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Form section */}
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 border">
                    <div className="mb-4">
                        <label className="font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="font-semibold text-gray-700">Message</label>
                        <textarea
                            className="w-full p-3 border rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
                            rows="5"
                            placeholder="Write your message..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Contact Info */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-600 mb-2">📍 Dhaka, Bangladesh</p>
                <p className="text-gray-600 mb-2">📞 +880 1234-567890</p>
                <p className="text-gray-600">📧 support@coursemanager.com</p>
            </div>
        </div>
    );
}
