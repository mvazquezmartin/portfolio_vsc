const { Server } = require("socket.io");
const colors = require("colors");

const messages = [];
const users = [];

const setSocket = (app) => {
  const io = new Server(app);

  io.on("connection", (socket) => {
    console.log(
      colors.yellow("Cliente conectado con id:"),
      colors.cyan(socket.id)
    );

    socket.on("newUser", (user) => {
      socket.user = user;
      users.push(user);
      io.emit("userConnected", user, users);
      socket.broadcast.emit("updateUserList", users);
      socket.emit("messageLogs", messages);
    });

    socket.on("disconnect", () => {
      const userIndex = users.indexOf(socket.user);
      console.log(
        colors.yellow("Cliente desconectado con id:"),
        colors.red(socket.id)
      );
      if (userIndex !== -1) {
        const disconnectUser = users.splice(userIndex, 1)[0];
        io.emit("userDisconnected", disconnectUser, users);
      }
    });

    socket.on("message", (data) => {
      messages.push(data);
      io.emit("messageLogs", messages);
    });

    socket.emit("hello", "world");
  });
};

module.exports = {setSocket, users, messages};
