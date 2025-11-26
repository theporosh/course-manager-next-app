import express from "express";
import { connectDB } from "../db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// GET /items
router.get("/", async (req, res) => {
    try {
        const db = await connectDB();
        const items = await db.collection("items").find().toArray(); // collection name: items
        res.json({ success: true, data: items });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to fetch items" });
    }
});

// GET /items/:id  -> single item details
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const db = await connectDB();

        // Try to find by numeric id first
        let item = await db.collection("items").findOne({ id: parseInt(id) });

        // If not found, try MongoDB _id
        if (!item) {
            item = await db.collection("items").findOne({ _id: new ObjectId(id) });
        }

        if (!item) return res.status(404).json({ success: false, error: "Item not found" });

        res.json({ success: true, data: item });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to fetch item" });
    }
});


export default router;