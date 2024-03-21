import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  language: {
    type: String,
    required: true,
  },
  stdin: {
    type: String,
  },
  code: {
    type: String,
  },
});

export const Data = mongoose.model("Data", dataSchema);
