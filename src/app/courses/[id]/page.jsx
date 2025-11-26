"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function CourseDetailsPage() {
    const router = useRouter();
    const pathname = usePathname(); // e.g., "/courses/6"
    const courseId = pathname.split("/").pop(); // get last segment

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!courseId) return;

        fetch(`http://localhost:5000/items/${courseId}`)
            .then((res) => {
                if (!res.ok) throw new Error("Network response not ok");
                return res.json();
            })
            .then((data) => {
                if (data.success) setCourse(data.data);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [courseId]);

    if (loading) return <p className="text-center mt-20">Loading...</p>;
    if (!course) return <p className="text-center mt-20">Course not found</p>;

    return (
        <div className="max-w-5xl mx-auto p-6">
            <button
                onClick={() => router.back()}
                className="mb-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-500 font-bold"
            >
                &larr; Back
            </button>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/2 h-80 md:h-96 rounded overflow-hidden shadow">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                        priority
                    />
                </div>

                <div className="md:w-1/2 flex flex-col justify-start">
                    <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                    <p className="text-gray-700 mb-4">{course.description}</p>

                    <p className="font-semibold text-lg mb-2">Price: {course.price}</p>
                    <p className="text-gray-600 mb-2">Category: {course.category}</p>
                    <p className="text-gray-600 mb-2">Duration: {course.duration}</p>
                    <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">Syllabus:</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {course.syllabus.map((topic, idx) => (
                                <li key={idx}>{topic}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
