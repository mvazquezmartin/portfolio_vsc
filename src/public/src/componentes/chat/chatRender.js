import { chatFunction } from "./chat.js";

const chatRender = () => {
  const miNodoContainer = document.createElement("div");
  miNodoContainer.classList("chatContainer")

  const titulo = document.createElement("h2");
  titulo.textContent = "Socket.io Chat 1.0v";

  const msjContainer = document.createElement("div");

  const sendMsg = document.createElement("input");
  sendMsg.setAttribute("type", "text");
  sendMsg.setAttribute("id", "chatBox");
  sendMsg.setAttribute("placeholder", "Escribe tu mensaje");

  const logMessage = document.createElement("div");

  const labelMsg = document.createElement("label");
  labelMsg.setAttribute("for", "Mensajes");

  const log = document.createElement("p");
  log.setAttribute("id", "messageLogs");

  miNodoContainer.appendChild(titulo);
  msjContainer.appendChild(sendMsg);
  miNodoContainer.appendChild(msjContainer);
  logMessage.appendChild(labelMsg);
  logMessage.appendChild(log);
  miNodoContainer.appendChild(logMessage);
  mainView.appendChild(miNodoContainer);

  chatFunction();
};

export { chatRender };
