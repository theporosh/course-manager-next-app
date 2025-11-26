"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";


const getValidImage = (img) => {
    if (!img || img.trim() === "" || img.trim().startsWith("..."))
        return "/fallback.jpg";

    try {
        const url = new URL(img);
        return img;
    } catch {
        return "/fallback.jpg";
    }
};


export default function CourseDetails() {
    const { id } = useParams();
    const router = useRouter();

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchCourse = async () => {
            try {
                const res = await axios.get(`https://render-express-deployment-oo2h.onrender.com/user-courses/${id}`);
                setCourse(res.data.data);
            } catch (err) {
                console.error(err);
                alert("Course not found!");
                router.push("/manage-courses");
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id, router]);

    if (loading) return <p className="text-center mt-10 text-lg font-medium">Loading course...</p>;
    if (!course) return <p className="text-center mt-10 text-lg font-medium">No course found!</p>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Cover Image */}
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                    src={getValidImage(course.image)}
                    alt={course.title ?? "Course"}
                    fill
                    className="object-cover rounded-md"
                    unoptimized
                />
            </div>

            {/* Course Info */}
            <h1 className="text-3xl font-bold mt-5">{course.title}</h1>
            <p className="text-gray-600 mt-2">{course.shortDesc}</p>

            {/* Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-700">
                <p><strong>Price:</strong> {course.price || "Free"}</p>
                <p><strong>Level:</strong> {course.level}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
            </div>

        
            {/* Full Description */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Full Description</h2>
                <p className="text-gray-700 mt-2 leading-relaxed">
                    {course.fullDesc?.trim() || "This course provides comprehensive learning materials and practical examples to help you understand and apply the concepts effectively."}
                </p>
            </div>

            {/* Tags */}
            {course.tags && course.tags.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold">Tags:</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {course.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Created Date */}
            <p className="text-sm text-gray-500 mt-6">
                Added on: {new Date(course.createdAt).toLocaleDateString()}
            </p>

            <button
                onClick={() => router.back()}
                className="mb-6 mt-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-500 font-bold"
            >
                &larr; Back
            </button>

        </div>
    );
}
