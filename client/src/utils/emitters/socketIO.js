import io from "socket.io-client";

const socket = io("http://localhost:8888/", {
  autoConnect: false,
  cors: {
    origin: "*",
  },
});

export const openSocket = async () => {
  await socket.open();

  socket.on("connect", () => {
    console.log(socket.id);
  });
};

export const fireMessage = (message) => {
  socket.emit("message", message);
};

export const disconnectSocket = () => {
  socket.disconnect();
};
