import mongoose from "mongoose";

const voteSessionSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
    },

    nomineeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nominee",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const VoteSession = mongoose.model("VoteSession", voteSessionSchema);

export default VoteSession;
