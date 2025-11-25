import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);
let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("courseManagerDB"); // your DB name
    console.log("Connected to MongoDB Atlas");
  }
  return db;
}