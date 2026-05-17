import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",

  SESSION_SECRET: process.env.SESSION_SECRET || "supersecret_session_key",

  ADMIN_USERNAME: process.env.ADMIN_USERNAME || "admin",

  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "admin123",

  NODE_ENV: process.env.NODE_ENV || "local",
};

export default env;
