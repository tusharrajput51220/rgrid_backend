console.log("emitting socket update...");
import express from "express";
import {
  login,
  logout,
  getDashboard,
  checkSession,
} from "../controllers/admin.controller.js";

import adminAuth from "../middlewares/adminAuth.middleware.js";

const router = express.Router();

router.post("/login", login);

router.post("/logout", logout);

router.get("/check", adminAuth, checkSession);

router.get("/dashboard", adminAuth, getDashboard);

export default router;
