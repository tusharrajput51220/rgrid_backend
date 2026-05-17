import session from "express-session";
import env from "../config/env.js";

const isProduction = env.NODE_ENV === "production";
// console.log("env.NODE_ENV", env.NODE_ENV);
// console.log("env.SESSION_SECRET", env.SESSION_SECRET);
// console.log("IS PRODUCTION:", isProduction);

const sessionMiddleware = session({
  secret: env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,

  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  },
});

export default sessionMiddleware;
