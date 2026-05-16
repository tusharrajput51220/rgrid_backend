import mongoose from "mongoose";

const nomineeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    votes: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Nominee = mongoose.model("Nominee", nomineeSchema);

export default Nominee;
