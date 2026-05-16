import express from "express";
import {
  login,
  logout,
  getDashboard,
} from "../controllers/admin.controller.js";

import adminAuth from "../middlewares/adminAuth.middleware.js";

const router = express.Router();

router.post("/login", login);

router.post("/logout", logout);

router.get("/dashboard", adminAuth, getDashboard);

export default router;
