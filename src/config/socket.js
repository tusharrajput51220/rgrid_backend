import { Server } from "socket.io";
import env from "./env.js";
import registerVoteSocket from "../sockets/vote.socket.js";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: env.CLIENT_URL,
      credentials: true,
      methods: ["GET", "POST"],
    },
  });

  registerVoteSocket(io);

  console.log("✅ Socket initialized");

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }

  return io;
};
