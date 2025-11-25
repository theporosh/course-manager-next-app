// import { MongoClient } from "mongodb";

// const uri = process.env.MONGO_URL;
// const options = {};

// let client;
// let clientPromise;

// if (!process.env.MONGO_URL) {
//   throw new Error("❌ MONGO_URL is missing in .env file!");
// }

// // In development — reuse the client to avoid hot-reload issues.
// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClient) {
//     global._mongoClient = new MongoClient(uri, options).connect();
//   }
//   clientPromise = global._mongoClient;
// } 
// else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;

// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";

// dotenv.config();

// const uri = process.env.MONGO_URL;
// const client = new MongoClient(uri);
// let db;

// export async function connectDB() {
//   if (!db) {
//     await client.connect();
//     db = client.db("courseManagerDB"); // your DB name
//     console.log("Connected to MongoDB Atlas");
//   }
//   return db;
// }
