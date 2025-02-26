import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

export const connectToDB = async () => {
  if (!MONGO_URI) {
    throw new Error("Missing MongoDB URI");
  }

  if (mongoose.connection.readyState) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "test",
    });
    console.log("✅ MongoDongo");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
