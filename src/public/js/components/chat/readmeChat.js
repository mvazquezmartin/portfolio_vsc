const readmeRenderChat = () => {
  const path = document.getElementById("rootPath");

  path.textContent = "Portfolio > SocketChat > readme_chat.txt";

  const miNodo = document.createElement("div");
  miNodo.classList.add("readme");

  const lineNumbers = document.createElement("div");
  lineNumbers.classList.add("line-numbers");

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const text = document.createElement("p");
  text.textContent = `Socket.io Chat 1.0v\n\nEste chat es una aplicación que permite a los usuarios conectarse y chatear\nen tiempo real. Está basado en tecnologías como Node.js para el backend\ny Socket.IO para la comunicación en tiempo real entre el servidor y los clientes.\n\nTecnología aplicada:\n- Node.js\n- Socket.io\n- SweetAlert2\n- HTML y CSS\n- JavaScript\n- DOM (Document Object Model)\n\nFuncionamiento:\n\n1. Cuando un usuario accede al chat, se le muestra un cuadro de diálogo\npara que ingrese un nombre de usuario.\n\n2. Una vez que el usuario ingresa su nombre de usuario y hace clic en "Aceptar",\nse establece una conexión mediante Socket.IO con el servidor.\n\n3. El servidor recibe la solicitud de conexión del cliente y emite el evento "connection".\n\n4. Cuando se establece la conexión, el servidor escucha los siguientes eventos\ndesde el cliente:\n- "newUser": Este evento se activa cuando un nuevo usuario se une al chat.\nEl servidor recibe el nombre de usuario y lo almacena en la lista de usuarios conectados.\n- "disconnect": Este evento se activa cuando un cliente se desconecta del chat.\nEl servidor identifica al usuario desconectado y lo\nelimina de la lista de usuarios conectados.\n- "message": Este evento se activa cuando un cliente envía un mensaje en el chat.\nEl servidor recibe el mensaje y lo agrega a una lista de mensajes.\n\n5. El servidor también emite eventos a los clientes para mantenerlos sincronizados:\n- "userConnected": Cuando un nuevo usuario se une al chat, el servidor envía\neste evento a todos los clientes para notificarles la conexión del nuevo usuario y\nproporcionarles la lista actualizada de usuarios conectados.\n- "userDisconnected": Cuando un usuario se desconecta del chat, el servidor envía\neste evento a todos los clientes para notificarles la desconexión del usuario\ny proporcionarles la lista actualizada de usuarios conectados.\n- "messageLogs": Cada vez que se envía un nuevo mensaje, el servidor envía este evento\na todos los clientes para proporcionarles la lista actualizada de mensajes en el chat.\n\nQuiero agradecerle a Diego Naran, mi profesor en CoderHouse Backend, por ser una fuente\nconstante de motivación y aliento. A veces puede ser abrumador aprender una nueva habilidad,\npero sus palabras de aliento y apoyo han sido un impulso increíble para seguir\nadelante.`;

  miNodo.appendChild(lineNumbers);
  miNodo.appendChild(textContainer);
  textContainer.appendChild(text);

  // Add line numbers
  for (let i = 1; i <= text.textContent.split("\n").length; i++) {
    const lineNumber = document.createElement("span");
    lineNumber.textContent = i;
    lineNumbers.appendChild(lineNumber);
  }
  mainView.append(miNodo);
};

export { readmeRenderChat };
