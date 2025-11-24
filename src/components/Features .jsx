const Features = () => {
    const features = [
        {
            icon: "📚",
            title: "Organized Courses",
            description: "Keep all your courses in one dashboard and manage them easily.",
        },
        {
            icon: "⏱️",
            title: "Anytime Learning",
            description: "Access your courses anytime, anywhere, on any device.",
        },
        {
            icon: "📈",
            title: "Progress Tracking",
            description: "Track your learning progress and reach your goals faster.",
        },
        {
            icon: "💡",
            title: "Expert Guidance",
            description: "Get guidance from experienced instructors and mentors.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Why Choose Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition duration-300 cursor-pointer text-center"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
