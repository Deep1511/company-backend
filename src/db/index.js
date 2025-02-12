import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import e from "express";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("MongoDB connected Successfully !!");
    console.log(
      `\nMongoDB connected !! DB Host: ${connectionInstance.connection.port}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
