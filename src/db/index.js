import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      "MongoDB Connected :: DB Host ::",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Error Occured in MongoDB Connection ::", error);
    process.exit(1);
  }
};
export default connectDB;
