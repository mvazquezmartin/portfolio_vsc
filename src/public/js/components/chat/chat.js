import { keysLog } from "./utils/keysLog.js";
import { alertConnection, alertNewUser } from "./utils/sweetAlert.js";
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
      alertConnection(user, "success");
      updateUsers(users);
    });

    socket.on("userDisconnected", (disconnectedUser, users) => {
      alertConnection(disconnectedUser, "info");
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

  socket.on("messageLogs", (data) => {
    keysLog(data);
  });

  if (currentUser != null) {
    fetch("/chatlog")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateUsers(data.users);
        keysLog(data.messages);
      })
      .catch((error) => {
        console.log("Error request", error);
      });
  }

  swal();
};

export { chatFunction };
