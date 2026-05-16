import env from "../config/env.js";
import Nominee from "../models/nominee.model.js";
import ApiError from "../utils/ApiError.js";

// login
export const loginAdmin = async (username, password) => {
  if (username !== env.ADMIN_USERNAME || password !== env.ADMIN_PASSWORD) {
    throw new ApiError(401, "Invalid admin credentials");
  }

  return true;
};

// dashboard data
export const getDashboardStats = async () => {
  const nominees = await Nominee.find().sort({
    votes: -1,
  });

  const totalVotes = nominees.reduce((sum, nominee) => sum + nominee.votes, 0);

  return {
    totalVotes,
    nominees,
  };
};
