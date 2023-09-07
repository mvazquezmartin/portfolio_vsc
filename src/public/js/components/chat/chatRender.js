import { chatFunction } from "./chat.js";

const chatRender = () => {
  const path = document.getElementById("rootPath");
  path.textContent = "Portfolio > SocketChat > socketChat-1.0v.js";

  const miNodoContainer = document.createElement("div");
  miNodoContainer.classList.add("chatContainerGrid");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("chatTitle");
  const h1Container = document.createElement("div");
  h1Container.classList.add("h1Container");
  const titleH1 = document.createElement("h1");
  titleH1.textContent = "📡 - Socket.io Chat 1.0v - 📫";

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btnContainer");
  const btnConnection = document.createElement("button");
  btnConnection.setAttribute("id", "btnConnection");
  btnConnection.classList.add("btnConnection");
  btnConnection.textContent = "Connect";

  const userConnectedBox = document.createElement("div");
  userConnectedBox.classList.add("userConnectedBox");
  const userTitle = document.createElement("div");
  userTitle.classList.add("userTitle");
  const userP = document.createElement("p");
  userP.textContent = "Usuarios Conectados";
  const userConnected = document.createElement("div");
  userConnected.setAttribute("id", "userConnectedLog");
  userConnected.classList.add("userConnected");

  const messageLogBox = document.createElement("div");
  messageLogBox.classList.add("messageLogBox");
  const logTitle = document.createElement("div");
  logTitle.classList.add("logTittle");
  const logP = document.createElement("p");
  logP.textContent = "Mensajes";
  const messageLog = document.createElement("div");
  messageLog.classList.add("messageLog");

  const sendMessage = document.createElement("div");
  sendMessage.classList.add("sendMessage");

  const sendMsg = document.createElement("input");
  sendMsg.classList.add("sendMsg");
  sendMsg.setAttribute("type", "text");
  sendMsg.setAttribute("id", "chatBox");
  sendMsg.setAttribute("autocomplete", "off");
  sendMsg.setAttribute(
    "placeholder",
    "Escribe tu mensaje, y presiona Enter para enviar."
  );

  const log = document.createElement("p");
  log.classList.add("log");
  log.setAttribute("id", "messageLogs");

  miNodoContainer.appendChild(titleDiv);
  titleDiv.appendChild(h1Container);
  h1Container.appendChild(titleH1);
  titleDiv.appendChild(btnContainer);
  btnContainer.appendChild(btnConnection);

  miNodoContainer.appendChild(userConnectedBox);
  userConnectedBox.appendChild(userTitle);
  userTitle.appendChild(userP);
  userConnectedBox.appendChild(userConnected);

  miNodoContainer.appendChild(messageLogBox);
  messageLogBox.appendChild(logTitle);
  logTitle.appendChild(logP);
  messageLogBox.appendChild(messageLog);
  messageLog.appendChild(log);

  miNodoContainer.appendChild(sendMessage);
  sendMessage.appendChild(sendMsg);

  mainView.appendChild(miNodoContainer);

  chatFunction();
};

export { chatRender };
