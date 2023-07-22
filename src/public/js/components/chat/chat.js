import { keysLog } from "./utils/keysLog.js";
import { alertConnect, alertNewUser } from "./utils/sweetAlert.js";
import { updateUsers } from "./utils/userConnectLog.js";

const socket = io();
let currentUser = null;

const chatFunction = () => {
  const swal = async () => {
    const chatBox = document.getElementById("chatBox");

    if (!currentUser) {
      try {
        const result = await alertNewUser();
        const user = result.value;
        socket.emit("newUser", user);
        currentUser = user;
      } catch (error) {
        console.log(error.message);
      }
    }

    socket.on("userConnected", (user, users) => {
      alertConnect(user, "success");
      updateUsers(users);
    });

    socket.on("userDisconnected", (disconnectedUser, users) => {
      alertConnect(disconnectedUser, "info");
      updateUsers(users);
    });

    chatBox.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        if (chatBox.value.trim().length > 0) {
          socket.emit("message", {
            user: currentUser,
            message: chatBox.value,
          });
          chatBox.value = "";
        }
      }
    });
  };

  socket.on("hello", (arg) => {
    console.log(arg);
  });

  socket.on("messageLogs", (data) => {
    keysLog(data);
  });

  swal();
};

export { chatFunction };
