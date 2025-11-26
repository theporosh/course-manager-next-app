
import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";


// Import routes
import itemsRoute from "./routes/items.js";
import userCoursesRouter from "./routes/userCourses.js";


const app = express();
const PORT = process.env.PORT || 5000;
// const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/items", itemsRoute);
app.use("/user-courses", userCoursesRouter);



connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
  });
});

