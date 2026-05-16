import * as voteService from "../services/vote.service.js";
import ApiResponse from "../utils/ApiResponse.js";

// GET /api/v1/votes/nominees
export const getNominees = async (req, res, next) => {
  try {
    const nominees = await voteService.getAllNominees();

    return res
      .status(200)
      .json(new ApiResponse(200, "Nominees fetched successfully", nominees));
  } catch (error) {
    next(error);
  }
};

// POST /api/v1/votes/cast
export const submitVote = async (req, res, next) => {
  try {
    const { nomineeId } = req.body;

    const sessionId = req.sessionID;

    const result = await voteService.castVote(sessionId, nomineeId);

    return res
      .status(200)
      .json(new ApiResponse(200, "Vote submitted successfully", result));
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/votes/results
export const getResults = async (req, res, next) => {
  try {
    const results = await voteService.getResults();

    return res
      .status(200)
      .json(new ApiResponse(200, "Results fetched successfully", results));
  } catch (error) {
    next(error);
  }
};
