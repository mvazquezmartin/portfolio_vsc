import { keysLog } from "./utils/keysLog.js";
import { alertConnection, alertNewUser } from "./utils/sweetAlert.js";
import { updateUsers } from "./utils/userConnectLog.js";

let currentUser = null;
const socket = io();

const chatFunction = () => {
  const chatBox = document.getElementById("chatBox");
  const btnConnection = document.getElementById("btnConnection");
  const userConnectedLog = document.getElementById("userConnectedLog");
  const messageLogs = document.getElementById("messageLogs");

  const connecteUser = async () => {
    try {
      const result = await alertNewUser();
      if (result.dismiss === "cancel") return;
      const user = result.value;
      if (socket.connected === false) {
        socket.connect();
      }
      socket.emit("newUser", user);
      currentUser = user;
      chatBoxEvent();
      btnConnection.textContent = "Disconnect";
      btnConnection.classList.remove("btnConnection");
      btnConnection.classList.add("btnDisconnectect");
      btnConnection.removeEventListener("click", connecteUser);
      btnConnection.addEventListener("click", disconnectUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  const disconnectUser = () => {
    socket.disconnect();
    alertConnection(currentUser, "desconectar", "error");
    currentUser = null;
    userConnectedLog.textContent = "";
    messageLogs.textContent = "";
    btnConnection.textContent = "Connect";
    btnConnection.classList.remove("btnDisconnectect");
    btnConnection.classList.add("btnConnection");
    btnConnection.removeEventListener("click", disconnectUser);
    btnConnection.addEventListener("click", connecteUser);
    chatBoxEvent();
  };

  socket.on("userConnected", (user, users) => {
    alertConnection(user, "conectar", "success");
    updateUsers(users);
  });

  socket.on("userDisconnected", (disconnectedUser, users) => {
    alertConnection(disconnectedUser, "desconectar", "info");
    updateUsers(users);
  });

  socket.on("messageLogs", (data) => {
    keysLog(data);
  });

  const isConeccted = () => {
    if (currentUser != null) {
      btnConnection.removeEventListener("click", connecteUser);
      btnConnection.textContent = "Disconnect";
      btnConnection.classList.remove("btnConnection");
      btnConnection.classList.add("btnDisconnectect");
      btnConnection.addEventListener("click", disconnectUser);
      fetch("/chatlog")
        .then((response) => response.json())
        .then((data) => {
          updateUsers(data.users);
          keysLog(data.messages);
        })
        .catch((error) => {
          console.log("Error request", error);
        });
    }
  };
  const chatBoxEvent = () => {
    chatBox.disabled = currentUser === null ? true : false;
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

  btnConnection.addEventListener("click", connecteUser);

  chatBoxEvent();
  isConeccted();
};

export { chatFunction };
