const readme = {
  playground: `
  # <center> 📝 PlayGround by EazyTutorial (GreatStack ) </center>
  Se define una función que genera una interfaz basada en la web que
  permite a los usuarios escribir y probar fragmentos de código HTML, CSS y JavaScript.
  Consta de tres secciones principales: HTML, CSS y JavaScript, junto con un área de salida
  que muestra el resultado combinado del código del usuario.
  ## 👷‍♂️ ¿Cómo Funciona?
  
  ### **Renderización del Playground:**
  - La función playGroundRender crea una disposición estructurada de HTML para el playground
  dentro de un elemento contenedor con la clase playGroundGrid.
  ### **Sección HTML:**
  - Un área de texto con el id htmlCode permite a los usuarios ingresar código HTML.
  Se proporciona un ejemplo de código HTML por defecto.
  ### **Sección CSS:**
  - Un área de texto con el id cssCode permite a los usuarios ingresar código CSS.
  Se proporciona un ejemplo de código CSS por defecto.
  ### **Sección JavaScript:**
  - Un área de texto con el id javaScriptCode permite a los usuarios ingresar código JavaScript.
  Se proporciona un ejemplo de código JavaScript por defecto.
  ### **Área de Salida:**
  - Se agrega un iframe con el id outPut dentro del área de salida. Este iframe mostrará
  el resultado combinado del HTML y el CSS del usuario, junto con el JavaScript ejecutado.
  ### **Ejecución Inicial:**
  - La función run se llama inicialmente para llenar el área de salida con el ejemplo de código
  por defecto.  
  
  ## 📝 Nota
  - El código proporcionado es un ejemplo básico de una interfaz de playground y se puede
  personalizar y mejorar según los requisitos de tu proyecto.
  - Los usuarios pueden modificar el código HTML, CSS y JavaScript en tiempo real y observar
  los cambios en el área de salida.
  ## 👤 Authors
  
  - [EazyTutorial](https://www.youtube.com/watch?v=tupa5BRHK4Q&ab_channel=GreatStack)<base target="_blank">
  
  Quiero expresar mi más sincero agradecimiento a EazyTutorial por el increíble trabajo que
  ha estado haciendo en la comunidad de FrontEnd. Su dedicación y pasión por compartir
  información y conocimientos es realmente admirable y ha sido una fuente de inspiración.
  Sus tutoriales son claros, concisos y están llenos de información valiosa. Han sido una
  herramienta invaluable en mi propio viaje de aprendizaje en FrontEnd. Desde HTML y CSS
  hasta JavaScript y React, sus lecciones han sido fundamentales en mi comprensión de estas
  tecnologías.  
  `,
  magic8ball: `
  # <center> 🎱 Magic 8 Ball </center>
  
  Es una sencilla aplicación web interactiva que simula el clásico juguete "Magic 8 Ball" para predecir la fortuna. Este juguete es conocido por proporcionar respuestas aleatorias a preguntas de sí o no planteadas por el usuario. La aplicación está construida utilizando HTML, CSS y JavaScript.
  
  
  
  ## 👷‍♂️ ¿Cómo Funciona?
  
  - **Interfaz de Usuario:** El juego ofrece una interfaz de usuario que muestra un título ("Magic 8 Ball") y un botón.
  - **Ingreso de Pregunta:** Cuando el usuario hace clic en el botón "Click para obtener tu respuesta", se genera y muestra una respuesta aleatoria.
  - **Generación de Respuesta:** La aplicación selecciona aleatoriamente una respuesta de una lista predefinida de posibles respuestas. Estas respuestas van desde positivas y afirmativas hasta negativas e inciertas.
  - **Animación:** La respuesta seleccionada se muestra con una animación de estilo máquina de escribir, donde el texto aparece como si se estuviera escribiendo. La animación le da un toque divertido e interactivo a la aplicación.
  - **Reutilización e Interacción:** El usuario puede continuar haciendo preguntas y haciendo clic en el botón para obtener nuevas respuestas aleatorias cada vez.
  
  
  ## 📌 Explicación del Código
  
  Se define una función **magic8BallRender** que crea y configura la interfaz del juego de la Magic 8 Ball. A continuación, se describe cada uno de los componentes clave:  
  
  - **Arreglo de Respuestas:** El arreglo **rta** contiene una lista de posibles respuestas de la Bola 8 Mágica, representadas por emojis y texto.
  - **Manipulación del DOM:** El código crea y manipula diversos elementos HTML utilizando la API del DOM (Document Object Model) para construir la interfaz del juego.
  - **Generación de Respuesta:** La función **getRta** se llama cuando se hace clic en el botón. Genera un índice aleatorio para seleccionar una respuesta del arreglo **rta** y la muestra con un efecto de animación de máquina de escribir.
  - **Restablecimiento de Animación:** Antes de aplicar la animación de escritura para mostrar la respuesta, se restablece cualquier animación existente para garantizar una ejecución fluida de la animación.
  ## 📝 Nota
  
  Este pequeño proyecto fueron mis primeros pasos en JavaScript.
  A continuación, está el código original que funcionaba con alert y prompt,
  función con while, utilizando switch. Siempre intenté aplicar todo lo aprendido
  en mis proyectos, pero a veces menos es más.  
  Por el aprecio que me genera ver mis comienzos, optimice el código y de esta forma simplificandolo,
  y de un aspecto más legible.
  <br/>  
  <pre>
  <code class="hljs language-javascript">
  function randomNum(max){
    return Math.floor(Math.random()*max);
  }
  function whileSoN(){
    while (jugar!='s' && jugar!='n'){
    jugar = prompt('Te dije S ó N !!! (＞︿＜)').toLowerCase();
    } 
  }
  let jugar = prompt('Hola! (っ◕‿◕)っ ¿Quieres consultarme tu futuro? S/N').toLowerCase();
  whileSoN();
  while (jugar == 's'){	
    let pregunta = prompt('(｡◕‿◕｡) Hazme una pregunta..')
    switch (randomNum(10)){
      case 0:			
        alert(pregunta+' '+'(ಠ‿ಠ) Es cierto.');
        jugar = prompt('(⊃｡•́‿•̀｡)⊃ ¿Quieres hacer otra pregunta? S/N').toLowerCase();
        whileSoN();
        break;
      case 1:
        alert(pregunta+' '+'( ͡° ͜ʖ ͡°) Es decididamente así.');
        jugar = prompt('(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N').toLowerCase();
        whileSoN();
        break;
      case 2:
        alert(pregunta+' '+'(°‿‿°) Sin lugar a dudas.');
        jugar = prompt('(⊃｡•́‿•̀｡)⊃ ¿Quieres hacer otra pregunta? S/N').toLowerCase();			
        whileSoN();
        break;
      case 3:
        alert(pregunta+' '+'（　ﾟДﾟ） Respuesta confusa, vuelve a intentarlo.');
        jugar = prompt('(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N').toLowerCase();
        whileSoN();
        break;
      case 4:
        alert(pregunta+' '+'(⩾﹏⩽) Vuelve a preguntar más tarde.');
        jugar = prompt('(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N').toLowerCase();
        whileSoN();
        break;
      case 5:
        alert(pregunta+' '+'(҂◡_◡) Mejor no decirte ahora.');
        jugar = prompt('(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N').toLowerCase();
        whileSoN();
        break;
      case 6:
        alert(pregunta+' '+'(ಠ_ಠ) No cuentes con ello.');
        jugar = prompt('(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N').toLowerCase();
        whileSoN();
        break;
      case 7:
        alert(pregunta+' '+'(⊙﹏⊙) Mi respuesta es no.');
        jugar = prompt('(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N').toLowerCase();
        whileSoN();
        break;
      case 8:
        alert(pregunta+' '+'(ಥ⌣ಥ) Mis fuentes dicen que no.');
        jugar = prompt('(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N').toLowerCase();
        whileSoN();
        break;
      case 9:
        alert(pregunta+' '+'(╬ ಠ益ಠ) No se, lo unico que puedo afirmar que el Bojo es un flancito');
        jugar = prompt('(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N').toLowerCase();			
        whileSoN();
        break;
    }	
  }
   alert('Adios (⩾﹏⩽)');
   </code>
   </pre>  
  ## 👤 Authors
  
  - [@mvazquezmartin](https://github.com/mvazquezmartin)<base target="_blank">
  - [Repositorio](https://github.com/mvazquezmartin/practica_js.git)<base target="_blank">
  
  
  
  `,
  socketIo: `
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
  ## 👤 Authors
  
  - [@mvazquezmartin](https://github.com/mvazquezmartin)<base target="_blank">
  
  
  `,
};

export { readme };
