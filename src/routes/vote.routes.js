import express from "express";
import {
  getNominees,
  submitVote,
  getResults,
} from "../controllers/vote.controller.js";

const router = express.Router();

router.get("/nominees", getNominees);

router.post("/cast", submitVote);

router.get("/results", getResults);

export default router;
