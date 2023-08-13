 # <center> 📡 Socket.io Chat 1.0v </center>
  
  Este chat es una aplicación que permite a los usuarios conectarse y chatear en tiempo real. Está basado en tecnologías como Node.js para el backend y Socket.IO para la comunicación en tiempo real entre el servidor y los clientes.
  ## 📚 Tech Stack
  [![My Skills](https://skillicons.dev/icons?i=nodejs,html,css,js)](https://skillicons.dev)
  - **Dependencias:** Socket.io, SweetAlert2.  
  
  ## 👷‍♂️ ¿Cómo Funciona?
  
  ### <ins>**Cliente**</ins>
  El archivo **chat.js** contiene el código para la parte del cliente de la aplicación de chat. Aquí se describen las principales funciones y eventos que se manejan en el cliente:  
  1. **Conexión del Usuario:**
  - El cliente se conecta al servidor de Socket.IO.
  - El usuario debe introducir su nombre a través de una ventana emergente (sweetAlert) cuando hace clic en el botón "Connect".
  - Una vez conectado, el cliente emite el evento "**newUser**" al servidor con el nombre del usuario.
  - Los usuarios conectados se actualizan en la lista de usuarios y se muestra una alerta de conexión exitosa.  
  2. **Desconexión del Usuario:**
  - Cuando el usuario hace clic en el botón "**Disconnect**", se desconecta del servidor.
  - Se muestra una alerta de desconexión y el usuario se elimina de la lista de usuarios.  
  3. **Envío de Mensajes:**
  - El cliente puede escribir mensajes en un cuadro de chat y presionar "Enter" para enviarlos.
  - Los mensajes enviados se emiten al servidor a través del evento "**message**".
  - Los mensajes recibidos se muestran en el cuadro de chat.  
  4. **Actualización y Consulta de Usuarios y Mensajes:**
  - El cliente puede solicitar los registros de chat anteriores haciendo clic en el botón "**Connect**" después de iniciar sesión.
  - La aplicación consulta el servidor para obtener los mensajes y la lista actualizada de usuarios.
  
  
  ### <ins>**Servidor**</ins>
  El archivo **socket.config.js** contiene el código para el servidor de la aplicación de chat. Se describen las principales funciones y eventos que se manejan en el servidor:
  1. **Configuración del Socket:**
  - El servidor utiliza la biblioteca Socket.IO para gestionar las conexiones de los clientes.
  - Cuando un cliente se conecta, se muestra un mensaje en la consola.
  2. **Nuevo Usuario:**
  - Cuando un cliente emite el evento "**newUser**" al conectarse, se almacena el nombre del usuario y se emiten eventos de conexión y actualización de usuarios a todos los clientes conectados.
  3. **Desconexión del Usuario:**
  - Cuando un cliente se desconecta, se elimina el usuario de la lista y se emiten eventos de desconexión y actualización de usuarios.
  4. **Envío y Recepción de Mensajes:**
  - Los mensajes enviados por un cliente se almacenan y se emiten a todos los clientes conectados para que puedan ver el registro del chat.
  ## 📝 Nota
  
  Quiero agradecerle a **Diego Naranjo**, mi profesor en CoderHouse Backend, por ser una fuente constante de motivación y aliento. A veces puede ser abrumador aprender una nueva habilidad, pero sus palabras de aliento y apoyo han sido un impulso increíble para seguir adelante.
  ## Authors
  
  - [@mvazquezmartin](https://github.com/mvazquezmartin)<base target="_blank">