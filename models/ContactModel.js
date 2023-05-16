import mongoose from "mongoose";
const contact_schema = new mongoose.Schema(
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
          message: {
            type: String,
            required: true,
            trim: true,
          },

    },
    { timestamps: true }
);
export default mongoose.model("contact_schema", contact_schema);
