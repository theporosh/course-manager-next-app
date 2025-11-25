"use client";

import { useState, useEffect } from "react";
import ItemCard from "@/components/ItemCard";

export default function ItemListPage() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    useEffect(() => {
        fetch("http://localhost:5000/items")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setItems(data.data);
            });
    }, []);

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-extrabold mb-2 text-gray-900">
                Course Catalog
            </h1>
            <p className="text-gray-600 mb-6">
                Browse all available courses and find the one that fits your needs.
            </p>

            {/* Search and Category Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-8 gap-4">
                <input
                    type="text"
                    placeholder="Search courses..."
                    className="flex-1 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="all">All Categories</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Fullstack">Fullstack</option>
                    <option value="Design">Design</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Mobile App">Mobile App</option>
                </select>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredItems.map((item) => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
}
