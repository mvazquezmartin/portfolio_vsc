const { Server } = require("socket.io");

const messages = [];

const setSocket = (app) => {
  const io = new Server(app);

  io.on("connection", (socket) => {
    console.log(`Cliente conectado con id: ${socket.id}`);

    socket.on("newUser", (user) => {
      socket.broadcast.emit("userConnected", user);
      socket.emit("messageLogs", messages);
    });

    socket.on("message", (data) => {
      messages.push(data);
      io.emit("messageLogs", messages);
    });
  });
};

module.exports = setSocket;
