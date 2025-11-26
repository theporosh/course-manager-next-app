"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function ManageCourses() {

     const router = useRouter();

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadCourses = async () => {
        try {
            const res = await fetch("https://render-express-deployment-oo2h.onrender.com/user-courses");
            const data = await res.json();
            setCourses(data.data || []);
        } catch (err) {
            console.error("Failed to load courses:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to undo this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (!confirm.isConfirmed) return;

        await fetch(`https://render-express-deployment-oo2h.onrender.com/user-courses/${id}`, {
            method: "DELETE",
        });

        await Swal.fire("Deleted!", "Course has been removed.", "success");
        loadCourses();
    };

    useEffect(() => {
        loadCourses();
    }, []);

    const getValidImage = (img) => {
    if (!img || img.trim() === "" || img.trim().startsWith("...")) {
        return "/fallback.jpg"; // public folder fallback
    }

    if (!img.startsWith("http")) {
        return "/fallback.jpg";
    }

    return img;
};

    if (loading) return <p className="p-6">Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Manage Courses</h1>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3 border">Image</th>
                            <th className="p-3 border">Title</th>
                            <th className="p-3 border">Level</th>
                            <th className="p-3 border">Price</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center p-4">No Courses Found</td>
                            </tr>
                        )}

                        {courses.map((course) => (
                            <tr key={course._id} className="hover:bg-gray-50">
                                <td className="p-3 border">
                                    <div className="relative w-24 h-14">
                                        <Image
                                            src={getValidImage(course.image)}
                                            alt={course.title ?? "Course"}
                                            fill
                                            className="object-cover rounded-md"
                                            unoptimized
                                        />
                                    </div>
                                </td>
                                <td className="p-3 border">{course.title}</td>
                                <td className="p-3 border">{course.level}</td>
                                <td className="p-3 border">{course.price}</td>
                                <td className="p-3 border flex gap-3">
                                    <button
                                        onClick={() => router.push(`/user/${course._id}`)}
                                        className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
                                    >
                                        View
                                    </button>
                                     

                                    <button
                                        onClick={() => handleDelete(course._id)}
                                        className="px-3 py-1 bg-red-600 text-white rounded-md text-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}