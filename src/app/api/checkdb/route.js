// import clientPromise from "@/lib/db";

// export async function GET() {
//     try {
//         const client = await clientPromise;
//         const db = client.db("courseManagerDB");

//         const result = await db.collection("test").find().toArray();

//         return Response.json({
//             success: true,
//             data: result,
//         });

//     } catch (error) {
//         console.log("DB Error:", error);
//         return Response.json({ success: false, error: "Database connection failed" });
//     }
// }
