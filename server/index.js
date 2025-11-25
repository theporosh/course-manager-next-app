// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import itemRoutes from "./routes/items.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/items", itemRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Express server running on port ${PORT}`);
// });

import express from "express";
import cors from "cors";
// import { connectDB } from "./db.js";
import itemsRoute from "./routes/items.js";
import { connectDB } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/items", itemsRoute);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
  });
});

