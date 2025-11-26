import express from "express";
import { connectDB } from "../db.js";

const router = express.Router();

// POST /user-courses -> add a new course
router.post("/", async (req, res) => {
    try {
        const {
            title,
            shortDesc,
            fullDesc,
            price,
            duration,
            level,
            image,
            category,
            instructor,
            priority,
            startDate,
            tags,
        } = req.body;

        // Validate required fields
        if (!title || !shortDesc || !fullDesc) {
            return res.status(400).json({ success: false, error: "Please provide all required fields" });
        }

        // Prepare new course object
        const newCourse = {
            title,
            shortDesc,
            fullDesc,
            price: price || "Free",
            duration: duration || "N/A",
            level: level || "Beginner",
            image: image || "https://i.ibb.co/default-course-image.png",
            category: category || "General",
            instructor: instructor || "Unknown",
            priority: priority || "Medium",
            startDate: startDate ? new Date(startDate) : null,
            tags: Array.isArray(tags) ? tags : [],
            createdAt: new Date(),
        };

        // Insert into user_courses collection
        const db = await connectDB();
        const result = await db.collection("user_courses").insertOne(newCourse);

        res.status(201).json({ success: true, data: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to add course" });
    }
});

export default router;
