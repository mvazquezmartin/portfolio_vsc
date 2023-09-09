import { alertSentMessage } from "./sweetAlertSuccess.js";

const url = "/messages";

const post = () => {
  const newMessage = document.getElementById("formContact");
  newMessage.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(newMessage);
    const message = {
      date: new Date(),
    };
    data.forEach((value, key) => (message[key] = value));

    fetch(url, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(message),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error al enviar el mensaje");
        alertSentMessage();
        newMessage.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export { post };
