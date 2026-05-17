import express from "express";
import cors from "cors";
import morgan from "morgan";

import env from "./config/env.js";
import routes from "./routes/index.js";

import sessionMiddleware from "./middlewares/session.middleware.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

/*
  core middlewares
*/
app.use(
  cors({
    origin: ["http://localhost:3000", "https://rgrid-frontend.vercel.app"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

/*
  session middleware
*/
app.set("trust proxy", 1);
app.use(sessionMiddleware);
app.use((req, res, next) => {
  console.log("COOKIE:", req.headers.cookie);
  next();
});

/*
  health check
*/
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Online Live Polling API running successfully",
  });
});

/*
  api routes
*/
app.use("/api/v1", routes);

/*
  404 fallback
*/
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
/*
  global error handler
*/
app.use(errorHandler);

export default app;
