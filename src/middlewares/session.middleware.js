import session from "express-session";
import env from "../config/env.js";

const isProduction = env.NODE_ENV === "production";

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
