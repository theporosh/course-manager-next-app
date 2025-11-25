import Image from "next/image";

const courses = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, and JavaScript to build amazing websites.",
    image: "/course1.avif",
  },
  {
    title: "Data Science",
    description: "Analyze data, create models, and gain insights with Python.",
    image: "/course2.avif",
  },
  {
    title: "UI/UX Design",
    description: "Design beautiful and user-friendly interfaces and experiences.",
    image: "/course3.avif",
  },
  {
    title: "Digital Marketing",
    description: "Master SEO, social media, and advertising strategies.",
    image: "/course4.avif",
  },
];

const Courses = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-xl mb-2 text-black">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
