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
      type: String,
      required: [true, "DOB group is require"],
    },
    address: {
      type: String,
      required: true,
    },
    requests: {
      type: Number,
      default: 0
    },
    status:{
      type:String,
      default:'Pending'
    },
    donarId:{
      type:String,
      default:"donar_id"
    },
    doctorapproval: {
      type: String,
      required:true
  },
  },
  { timestamps: true }
);

export default mongoose.model("RecReqBank", RecSchema);