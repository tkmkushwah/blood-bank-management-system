import mongoose from "mongoose";

const blood_data_schema = new mongoose.Schema(
  {
   
   
    bloodGroupA: {
      type: Number,
      required: true,
    },
    bloodGroupB: {
        type: Number,
        required: true,
      },
      bloodGroupAB: {
        type: Number,
        required: true,
      },
      bloodGroupO: {
        type: Number,
        required: true,
      },
      bloodGroupAN: {
        type: Number,
        required: true,
      },
      bloodGroupBN: {
        type: Number,
        required: true,
      },
      bloodGroupABN: {
        type: Number,
        required: true,
      },
      bloodGroupON: {
        type: Number,
        required: true,
      },
      bloodGroupA2N: {
      type: Number,
      required: true,
    },
    bloodGroupA2: {
      type: Number,
      required: true,
    },
    bloodGroupA1B: {
      type: Number,
      required: true,
    },
    bloodGroupA1BN: {
      type: Number,
      required: true,
    },
    bloodGroupA2B: {
      type: Number,
      required: true,
    },
    bloodGroupA2BN: {
      type: Number,
      required: true,
    },
    bloodGroupBOMBAY: {
      type: Number,
      required: true,
    },

   
  },
  { timestamps: true }
);

export default mongoose.model("blood_data_schema", blood_data_schema);
