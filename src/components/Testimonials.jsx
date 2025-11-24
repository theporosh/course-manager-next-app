import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      feedback: "This platform has completely transformed the way I learn!",
      avatar: "/test1.avif",
    },
    {
      name: "James M.",
      feedback: "Organizing my courses has never been easier. Highly recommend!",
      avatar: "/test2.avif",
    },
    {
      name: "Emily R.",
      feedback: "The progress tracking helps me stay motivated every day.",
      avatar: "/test3.avif",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
              <p className="text-gray-600 mb-4">{t.feedback}</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
