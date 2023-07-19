const { Server } = require("socket.io");

const messages = [];
const users = [];

const setSocket = (app) => {
  const io = new Server(app);

  io.on("connection", (socket) => {
    console.log(`Cliente conectado con id: ${socket.id}`);

    socket.on("newUser", (user) => {
      socket.user = user;
      users.push(user);
      io.emit("userConnected", user, users);
      socket.broadcast.emit("updateUserList", users)
      socket.emit("messageLogs", messages);
    });

    socket.on("disconnect", () => {
      const userIndex = users.indexOf(socket.user);
      if (userIndex !== -1) {
        const disconnectUser = users.splice(userIndex, 1)[0];
        io.emit("userDisconnected", disconnectUser, users);        
      }
    });

    socket.on("message", (data) => {
      messages.push(data);
      io.emit("messageLogs", messages);
    });
  });
};

module.exports = setSocket;
