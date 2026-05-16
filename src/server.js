import http from "http";

import app from "./app.js";
import env from "./config/env.js";
import connectDB from "./config/db.js";
import { initSocket } from "./config/socket.js";
import seedNominees from "./seeders/nomineeSeeder.js";

const startServer = async () => {
  try {
    /*
      connect database
    */
    await connectDB();

    /*
      seed default nominees
    */
    await seedNominees();

    /*
      create http server
    */
    const server = http.createServer(app);

    /*
      initialize socket.io
    */
    initSocket(server);

    /*
      start server
    */
    server.listen(env.PORT, () => {
      console.log(`🚀 Server running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
