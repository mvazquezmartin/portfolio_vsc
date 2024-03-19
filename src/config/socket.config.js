import { Server } from 'socket.io';
import 'colors';

const messages = [];
const users = [];

const setSocket = (app) => {
  const io = new Server(app);

  io.on('connection', (socket) => {
    console.log('Client connected with ID:'.green, socket.id.cyan);

    socket.on('newUser', (user) => {
      socket.user = user;
      users.push(user);
      io.emit('userConnected', user, users);
      socket.broadcast.emit('updateUserList', users);
      socket.emit('messageLogs', messages);
    });

    socket.on('disconnect', () => {
      const userIndex = users.indexOf(socket.user);
      console.log('Client disconnected with ID:'.yellow, socket.id.red);
      if (userIndex !== -1) {
        const disconnectUser = users.splice(userIndex, 1)[0];
        io.emit('userDisconnected', disconnectUser, users);
      }
      if (users.length === 0) {
        messages.splice(0, messages.length);
      }
    });

    socket.on('message', (data) => {
      messages.push(data);
      io.emit('messageLogs', messages);
    });

    socket.emit('hello', 'world');
  });
};

export { setSocket, users, messages };
