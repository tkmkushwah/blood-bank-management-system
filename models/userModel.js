import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  bloodgroup: {
    type: Object,
    required: [true, "Blood group is require"],
  },
  DOB: {
    type: Date,
    required: [true, "DOB group is require"],
  },
  Location: {
    type: String,
    required: [true, "Location group is require"],
  },
});

const userModel = model("users", userSchema);

export default userModel;