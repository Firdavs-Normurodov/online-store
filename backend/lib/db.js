import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected `);
  } catch (error) {
    console.log("Error connecting to MONGODB", error.message);
    process.exit(1);
  }
};
