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
    phone: {
      type: Number,
      required: true,
    },
    units: {
      type: String,
      required: true,
    },
    bloodgroup: {
      type: String,
      required: [true, "Blood group is require"],
    },
    DOB: {
      type: Date,
      required: [true, "DOB group is require"],
    },
    address: {
      type: String,
      required: true,
    },

    doctorapproval: {
      type: Buffer,
    },
  },
  { timestamps: true }
);

export default mongoose.model("bloodRequests", RecSchema);
