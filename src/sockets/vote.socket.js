import Nominee from "../models/nominee.model.js";
import { SOCKET_EVENTS } from "../utils/constants.js";

const registerVoteSocket = (io) => {
  io.on("connection", async (socket) => {
    console.log(`🟢 Socket connected: ${socket.id}`);

    /*
      Event: admin joins dashboard
      Purpose: immediately send current vote data
    */
    socket.on("joinAdminDashboard", async () => {
      try {
        console.log(`📊 Admin joined dashboard: ${socket.id}`);

        const currentResults = await Nominee.find().sort({
          votes: -1,
        });

        socket.emit(SOCKET_EVENTS.VOTE_UPDATED, currentResults);
      } catch (error) {
        console.error("Socket joinAdminDashboard error:", error.message);
      }
    });

    /*
      Health check event
      useful for debugging
    */
    socket.on("pingServer", () => {
      socket.emit("pongServer", {
        message: "Server alive",
      });
    });

    /*
      disconnect
    */
    socket.on("disconnect", () => {
      console.log(`🔴 Socket disconnected: ${socket.id}`);
    });
  });
};

export default registerVoteSocket;
