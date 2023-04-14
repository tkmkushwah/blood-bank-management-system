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
      required: false,
      unique: true,
    },
    phone: {
      type: Number,
      required: false,
    },
    bloodgroup: {
      type: String,
      required: [false, "Blood group is require"],
    },
    address: {
      type: String,
      required: false,
    },
    status:{
      type:String,
      default:"Pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("blood_bank_schema", blood_bank_schema);
