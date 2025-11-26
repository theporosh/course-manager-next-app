"use client";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddCourse() {
    const [title, setTitle] = useState("");
    const [shortDesc, setShortDesc] = useState("");
    const [fullDesc, setFullDesc] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [duration, setDuration] = useState("");
    const [level, setLevel] = useState("");
    const [instructor, setInstructor] = useState("");
    const [priority, setPriority] = useState("");
    const [startDate, setStartDate] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCourse = {
            title,
            shortDesc,
            fullDesc,
            price,
            image,
            category,
            duration,
            level,
            instructor,
            priority,
            startDate,
            tags: tags.split(",").map((t) => t.trim()),
        };

        try {
            await axios.post("https://render-express-deployment-oo2h.onrender.com/user-courses", newCourse);
            Swal.fire({
                icon: "success",
                title: "Course added!",
                showConfirmButton: false,
                timer: 1500,
            });
            // Reset form
            setTitle("");
            setShortDesc("");
            setFullDesc("");
            setPrice("");
            setImage("");
            setCategory("");
            setDuration("");
            setLevel("");
            setInstructor("");
            setPriority("");
            setStartDate("");
            setTags("");
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response?.data?.error || "Failed to add course",
            });
        }
    };

    return (
        <div className="p-6 bg-gray-50 shadow-2xl rounded-lg max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Course Title"
                    className="input input-bordered w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Short Description"
                    className="input input-bordered w-full"
                    value={shortDesc}
                    onChange={(e) => setShortDesc(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Full Description"
                    className="textarea textarea-bordered w-full md:col-span-2"
                    value={fullDesc}
                    onChange={(e) => setFullDesc(e.target.value)}
                    required
                ></textarea>
                <input
                    type="text"
                    placeholder="Price ($)"
                    className="input input-bordered w-full"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <select
                    className="select select-bordered w-full"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option>Backend</option>
                    <option>Frontend</option>
                    <option>Fullstack</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Data Science</option>
                    <option>Cloud Computing</option>
                    <option>Mobile Development</option>
                </select>
                <input
                    type="text"
                    placeholder="Duration (e.g. 6 weeks)"
                    className="input input-bordered w-full"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <select
                    className="select select-bordered w-full"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option value="">Select Level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
                <input
                    type="text"
                    placeholder="Instructor Name"
                    className="input input-bordered w-full"
                    value={instructor}
                    onChange={(e) => setInstructor(e.target.value)}
                />
                <select
                    className="select select-bordered w-full"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="">Priority (optional)</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
                <input
                    type="date"
                    className="input input-bordered w-full"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    className="input input-bordered w-full md:col-span-2"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
                <button 
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full md:col-span-2 mt-4">
                    Submit Course</button>
            </form>
        </div>
    );
}


