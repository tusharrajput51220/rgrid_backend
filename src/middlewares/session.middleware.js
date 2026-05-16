import session from "express-session";
import env from "../config/env.js";

const sessionMiddleware = session({
  secret: env.SESSION_SECRET,

  resave: false,
  saveUninitialized: true,

  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    httpOnly: true,
    secure: false, // true in production with HTTPS
  },
});

export default sessionMiddleware;
