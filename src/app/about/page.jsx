import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            {/* Header Section */}
            <h1 className="text-4xl font-bold text-center mb-6">
                About <span className="text-blue-600">Course Manager</span>
            </h1>

            <p className="text-lg text-gray-700 text-center mb-12">
                Course Manager is a modern learning platform designed to simplify course browsing,
                enrollment, and management. Whether you&apos;re a student or instructor, our system
                ensures seamless access to learning resources with a polished and intuitive UI.
            </p>

            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="w-full h-[300px] relative rounded-lg shadow-lg overflow-hidden">
                    <Image
                        src="/learning_image.avif"
                        alt="Learning platform"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div>
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to empower learners by providing easy access to high-quality courses.
                        With clear navigation, reliable authentication, and smooth performance, Course Manager
                        enables students to explore diverse categories and upskill efficiently.
                    </p>

                    <p className="text-gray-700 mt-4 leading-relaxed">
                        We help instructors showcase their expertise with dedicated course pages, syllabuses,
                        and detailed curriculum structure — making education more accessible for everyone.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us?</h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md border">
                        <h3 className="text-xl font-bold mb-2">Easy Navigation</h3>
                        <p className="text-gray-700">Browse and explore courses effortlessly with a smooth UI.</p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md border">
                        <h3 className="text-xl font-bold mb-2">Secure Authentication</h3>
                        <p className="text-gray-700">Powered by NextAuth.js for safe and simple login.</p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md border">
                        <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                        <p className="text-gray-700">Fully optimized for all devices and screen sizes.</p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md border">
                        <h3 className="text-xl font-bold mb-2">MongoDB Integration</h3>
                        <p className="text-gray-700">Fast and scalable backend with Express API.</p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md border">
                        <h3 className="text-xl font-bold mb-2">Tailwind + DaisyUI</h3>
                        <p className="text-gray-700">Beautiful and consistent UI components.</p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md border">
                        <h3 className="text-xl font-bold mb-2">Modern Technologies</h3>
                        <p className="text-gray-700">Next.js App Router, secure APIs & optimized performance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
