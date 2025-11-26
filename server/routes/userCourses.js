import express from "express";
import { connectDB } from "../db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// POST /user-courses -> Add A New Course API Route
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
            image: image || "https://i.ibb.co.com/7t76FdWX/m7.jpg",
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


// Manage Courses API Routes

// GET: All user added courses
router.get("/", async (req, res) => {
    try {
        const db = await connectDB();
        const courses = await db.collection("user_courses")
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        res.json({ success: true, data: courses });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to fetch courses" });
    }
});

// GET: Single course (View Details)
router.get("/:id", async (req, res) => {
    try {
        const db = await connectDB();
        const course = await db.collection("user_courses").findOne({
            _id: new ObjectId(req.params.id),
        });

        if (!course) return res.status(404).json({ success: false, error: "Course not found" });

        res.json({ success: true, data: course });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to fetch course" });
    }
});

// DELETE: Remove course
router.delete("/:id", async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection("user_courses").deleteOne({
            _id: new ObjectId(req.params.id),
        });

        res.json({ success: true, message: "Course deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to delete course" });
    }
});

export default router;
