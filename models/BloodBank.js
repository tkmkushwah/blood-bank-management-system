import mongoose from "mongoose";

const blood_bank_schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },
    usertype:{
      type:String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("blood_bank_schema", blood_bank_schema);
