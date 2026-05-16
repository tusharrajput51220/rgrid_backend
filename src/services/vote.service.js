import Nominee from "../models/nominee.model.js";
import VoteSession from "../models/voteSession.model.js";
import ApiError from "../utils/ApiError.js";
import { getIO } from "../config/socket.js";
import { SOCKET_EVENTS } from "../utils/constants.js";

// get all nominees
export const getAllNominees = async () => {
  return await Nominee.find().sort({ createdAt: 1 });
};

// cast vote
export const castVote = async (sessionId, nomineeId) => {
  // check already voted
  const existingVote = await VoteSession.findOne({ sessionId });

  if (existingVote) {
    throw new ApiError(400, "You have already voted");
  }

  // check nominee exists
  const nominee = await Nominee.findById(nomineeId);

  if (!nominee) {
    throw new ApiError(404, "Nominee not found");
  }

  // increment vote
  nominee.votes += 1;
  await nominee.save();

  // save session
  await VoteSession.create({
    sessionId,
    nomineeId,
  });

  // latest results
  const updatedResults = await Nominee.find().sort({
    createdAt: 1,
  });

  // emit socket
  console.log("emitting socket update...");
  getIO().emit(SOCKET_EVENTS.VOTE_UPDATED, updatedResults);

  return nominee;
};

// get results
export const getResults = async () => {
  return await Nominee.find().sort({
    votes: -1,
  });
};
