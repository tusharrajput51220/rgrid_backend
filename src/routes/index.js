import express from "express";
import voteRoutes from "./vote.routes.js";
import adminRoutes from "./admin.routes.js";

const router = express.Router();

router.use("/votes", voteRoutes);

router.use("/admin", adminRoutes);

export default router;
