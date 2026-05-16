import { Server } from "socket.io";
import registerVoteSocket from "../sockets/vote.socket.js";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  registerVoteSocket(io);

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }

  return io;
};
