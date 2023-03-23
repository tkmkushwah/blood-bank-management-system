import mongoose from "mongoose";

const RecSchema = new mongoose.Schema(
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
    units: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
      required: [true, "DOB group is require"],
    },
    bloodgroup: {
      type: Object,
      required: [true, "Blood group is require"],
    },
    doctorapproval: {
      type: image,
      required: true,
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
