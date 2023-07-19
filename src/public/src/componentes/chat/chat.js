const chatFunction = () => {
  const socket = io();

  const swal = async () => {
    const chatBox = document.getElementById("chatBox");

    try {
      const result = await Swal.fire({
        title: "Identificate",
        input: "text",
        text: "Ingresa un usuario para chatear",
        inputValidator: (value) => {
          return !value && "Necesitas ingresar un usuario para continuar";
        },
        allowOutsideClick: false,
      });

      const user = result.value;

      socket.emit("newUser", user);

      socket.on("userConnected", (user, users) => {
        Swal.fire({
          text: `Se acaba de conectar ${user} al chat`,
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "success",
        });
        updateUsers(users);
      });

      socket.on("userDisconnected", (disconnectedUser, users) => {
        Swal.fire({
          text: `${disconnectedUser} se ha desconectado del chat`,
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "info",
        });
        updateUsers(users);
      });

      chatBox.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          if (chatBox.value.trim().length > 0) {
            socket.emit("message", { user, message: chatBox.value });
            chatBox.value = "";
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  socket.on("messageLogs", (data) => {
    const log = document.getElementById("messageLogs");
    let messages = "";

    data.forEach((message) => {
      messages = messages + `<b>${message.user}</b>: ${message.message}</br>`;
    });

    log.innerHTML = messages;
  });

  const updateUsers = (users) => {
    const usersList = document.getElementById("userConnectedLog");
    usersList.innerHTML = "";

    const usersArray = Array.isArray(users) ? users : [users];

    usersArray.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("userDiv");
      const userP = document.createElement("p");
      userP.textContent = user;
      usersList.appendChild(userDiv);
      userDiv.appendChild(userP);
    });
  };

  swal();
};

export { chatFunction };
