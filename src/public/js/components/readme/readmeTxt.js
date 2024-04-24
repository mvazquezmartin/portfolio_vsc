import { imgPath } from '../../assetsPath/assetsPath.js';

const readme = {
  followMe: `
  # <center> Follow Me! </center>

  ![Follow Me!](${imgPath.FOLLOWME} "Follow Me!")
  
  Este código JavaScript implementa un juego de memoria en el que los jugadores necesitan repetir una secuencia de luces y sonidos. El juego comienza iluminando una secuencia de cuadrados en un orden específico, y el jugador debe replicar la secuencia correctamente para avanzar al siguiente nivel. Cada nivel aumenta la longitud de la secuencia, desafiando las habilidades de memoria del jugador.  
  
  ## Dependencias
  
  [![My Skills](https://skillicons.dev/icons?i=html,css,js)](https://skillicons.dev)

  ## Características
  
  - El juego genera una secuencia aleatoria de cuadrados para iluminar.
  - Los jugadores deben hacer clic en los cuadrados en el mismo orden que la secuencia generada.
  - Si el jugador hace clic en la secuencia correcta, el juego avanza al siguiente nivel.
  - Si el jugador comete un error, el juego termina y se muestra el mejor nivel alcanzado.
  - El jugador puede hacer clic en el botón "Inicio" para reiniciar el juego.
  
  ## Instalación
  
  1. Clona el repositorio:

  <pre>
  <code class="hljs language-bash">
    git clone https://github.com/mvazquezmartin/follow-me.git
  </code>
  </pre>
  2. Abrir index.html en tu navegador.    
  
  ## Contribuciones
  
  
  ¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, siéntete libre de bifurcar el repositorio y enviar una solicitud de extracción.
  
  
  ## Licencia  
  
  Este proyecto está bajo la licencia [MIT](https://choosealicense.com/licenses/mit/)
  
  ## Autor
  - [@mvazquezmartin](https://github.com/mvazquezmartin)
  - [LINK](https://mvazquezmartin.github.io/follow-me/)
  - [Repositorio](https://github.com/mvazquezmartin/follow-me)
  `,
  guessTheColor: `
  
# <center>Guess The Color</center>
![Guess The Color Responsives](${imgPath.GUESSTHECOLOR} "Guess The Color")

Esta es una aplicación web donde los usuarios pueden adivinar un valor de color RGB ajustando los componentes rojo, verde y azul utilizando controles deslizantes. La suposición del usuario se compara con un color generado aleatoriamente, y se proporciona retroalimentación sobre qué tan cerca está la suposición del color correcto.

## Dependencias
[![My Skills](https://skillicons.dev/icons?i=html,css,js)](https://skillicons.dev)

## Características

- Controles deslizantes ajustables para los componentes de color rojo, verde y azul.
- Botones para incrementar o decrementar cada componente de color individualmente.
- Retroalimentación sobre la cercanía de la suposición del usuario al color correcto.
- Visual representation of the user's remaining attempts.


## Uso

1. **Ajustar Componentes de Color:** Utiliza los controles deslizantes o los botones de incremento/decremento para ajustar los componentes de color rojo, verde y azul individualmente.

2. **Adivinar el Color:** Una vez que estés satisfecho con tu suposición de color, haz clic en el botón "GUESS" para ver qué tan cerca está tu suposición del color correcto.

3. **Retroalimentación:** Después de adivinar, recibirás retroalimentación sobre qué tan cerca está tu suposición del color correcto. La retroalimentación indicará el porcentaje de cercanía al color correcto y actualizará la representación visual de los intentos restantes.

4. **Reiniciar:** Haz clic en el botón "RESET" en cualquier momento para comenzar un nuevo juego. Esto restablecerá los componentes de color, los intentos y proporcionará un nuevo color generado aleatoriamente para adivinar.


## Instalación

1. Conar el repositorio

<pre>
<code class="hljs language-bash">
  git clone https://github.com/mvazquezmartin/guess-the-color.git
</code>
</pre>
2. Abrir index.html en tu navegador.    
## Licencia

Este proyecto está bajo la licencia [MIT](https://choosealicense.com/licenses/mit/)

## Autor
- [@mvazquezmartin](https://github.com/mvazquezmartin)
- [LINK](https://mvazquezmartin.github.io/guess-the-color/)
- [Repositorio](https://github.com/mvazquezmartin/guess-the-color)
  `,
  guessTheNumber: `
   # <center> Guess The Number Game </center>
![Guess The Number responsives](${imgPath.GUESSTHENUMBER} "Guess The Number")

Este es un ejemplo de una clase en JavaScript llamada **GuessTheNumberGame** que implementa un juego simple de adivinanza de números. Los jugadores intentan adivinar un número secreto dentro de un rango específico. El juego proporciona retroalimentación sobre cada intento y lleva un registro del número de intentos realizados.

## Dependencias
[![My Skills](https://skillicons.dev/icons?i=html,css,js)](https://skillicons.dev)
- Archivos de audio para clics en botones: **click-numbers.wav**, **click-btn-guess.wav**, **click-btn-reset.wav**.
- Alertas con **SeewtAlert2**

## Características

- **Inicialización del Juego:** Al inicializarse, el juego configura los elementos necesarios e inicializa el GameManager.
- **Entrada de Números:** Los usuarios pueden introducir números a través de una interfaz de teclado numérico.
- **Manejo de Suposiciones:** Maneja las suposiciones de los usuarios, proporcionando retroalimentación y actualizando la interfaz de usuario del juego en consecuencia.
- **Reinicio del Juego:** Permite a los usuarios reiniciar el juego, eliminando intentos anteriores y restableciendo el número secreto.
- **Retroalimentación de Audio:** Proporciona retroalimentación de audio para interacciones como la selección de números, adivinanzas y reinicio del juego.

## Uso

1. **Inicialización:** Crea una instancia de la clase GuessTheNumberGame para iniciar el juego.

2. **Entrada de Números:** Utiliza la interfaz del teclado numérico para introducir tus suposiciones.

3. **Adivinar:** Haz clic en el botón "Adivinar" para enviar tu suposición.

4. **Reinicio:** Haz clic en el botón "Reiniciar" para reiniciar el juego.


## Ejemplo

<pre>
<code class="hljs language-javascript">
// Initialize the game
const guessTheNumberInit = new GuessTheNumberGame();

// Ensure the DOM is loaded before initializing the game
document.addEventListener('DOMContentLoaded', () => {
  guessTheNumberInit;
});

</code>
</pre>

## Instalación

1. Clonar el repositorio:

<pre>
<code>
  git clone https://github.com/mvazquezmartin/guess-the-number-v2.git
</code>
</pre>

2. Abrir index.html en tu navegador.    

## Licencia

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)

## Autor
- [@mvazquezmartin](https://github.com/mvazquezmartin)
- [LINK](https://mvazquezmartin.github.io/guess-the-number-v2/)
- [Repositorio](https://github.com/mvazquezmartin/guess-the-number-v2)
  `,
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
  
  Es una sencilla aplicación web interactiva que simula el clásico juguete "Magic 8 Ball" para predecir la fortuna. Este juego es conocido por proporcionar respuestas aleatorias a preguntas de sí o no planteadas por el usuario. La aplicación está construida utilizando HTML, CSS y JavaScript.
  
  
  
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
  
  Este pequeño proyecto fueron mis primeros pasos en JavaScript. A continuación, está el código original que funcionaba con alert y prompt, función con while, utilizando switch. Siempre intenté aplicar todo lo aprendido en mis proyectos, pero a veces menos es más. Por el aprecio que me genera ver mis comienzos, optimicé el código y de esta forma simplificándolo, y de un aspecto más legible.
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
  CRUD: `
  # API de Administración CRUD con Almacenamiento Dinámico 
    
  Esta API facilita las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre datos, ofreciendo la flexibilidad de elegir entre el uso de una base de datos MongoDB o un archivo JSON para el almacenamiento. La implementación incorpora el patrón de diseño Strategy, permitiendo cambiar el método de persistencia en tiempo de ejecución.  
    
  ![STRATEGY](${imgPath.STRATEGY})  
    
  ## API Reference
  *respuestas MongoDb
    
  #### Get all items    
  \`\`\`http
    GET /api/cruds?persistence=mongodb
  \`\`\`
  <br>

  \`\`\`json
  Response:
  {
      "status": "success",
      "message": "Items found",
      "payload": [
          {
              "_id": "6537191ad540729aaa2106a2",
              "title": "prueba2",
              "description": "description 2",
              "category": "category 2",
              "image": "https://dummyimage.com/300x200/000/fff",
              "price": 99,
              "stock": 99,
              "status": true,
              "__v": 0
          },
          ...
      ]
  }
  \`\`\`
  <br>
    
  #### Get one item by id    
  \`\`\`http
    GET /api/cruds/:id?persistence=mongodb
  \`\`\`
  <br>
    
  \`\`\`json
  Response:
  {
      "status": "success",
      "message": "Item find",
      "payload": {
          "_id": "6537191ad540729aaa2106a1",
          "title": "prueba1",
          "description": "description 1",
          "category": "category 1",
          "image": "https://dummyimage.com/300x200/000/fff",
          "price": 99,
          "stock": 99,
          "status": true,
          "__v": 0
      }
  }
  \`\`\`
  <br>
    
  #### Create new item    
  \`\`\`http
    POST /api/cruds?persistence=mongodb
  \`\`\`
  <br>
    
  \`\`\`http
  Request body:
  {
      "title": "prueba",
      "description": "description",
      "category": "category",
      "image": "img.jpg",
      "price": 99.99,
      "stock": 99
  }
  \`\`\`
  <br>

  \`\`\`json
  Response:
  {
      "status": "success",
      "message": "Item find",
      "payload": {
          "_id": "6537191ad540729aaa2106a1",
          "title": "prueba1",
          "description": "description 1",
          "category": "category 1",
          "image": "https://dummyimage.com/300x200/000/fff",
          "price": 99,
          "stock": 99,
          "status": true,
          "__v": 0
      }
  }
  \`\`\`
  <br>

  #### Modify existing item
  \`\`\`http
    PATCH /api/cruds/:id?persistence=mongodb
  \`\`\`
  <br>

  \`\`\`http
  Request body:
  {
      "title": "PRUEBA MODIFICACION"
  }
  \`\`\`
  <br>

  \`\`\`json
  {
      "status": "success",
      "message": "Item successfully modified",
      "payload": {
          "_id": "6537191ad540729aaa2106a1",
          "title": "PRUEBA MODIFICACION",
          "description": "description 1",
          "category": "category 1",
          "image": "https://dummyimage.com/300x200/000/fff",
          "price": 99,
          "stock": 99,
          "status": true
      }
  }
  \`\`\`
  <br>
  
  #### Delete by id
  \`\`\`http
    DELETE /api/cruds/:id?persistence=mongodb
  \`\`\`
  <br>

  \`\`\`json
  Response:
  {    
      "status": "success",
      "message": "Item deleted successfully",
      "payload": {
          "_id": "6537191ad540729aaa2106a1",
          "title": "prueba1",
          "description": "description 1",
          "category": "category 1",
          "image": "https://dummyimage.com/300x200/000/fff",
          "price": 99,
          "stock": 99,
          "status": true,
          "__v": 0
      }
  }
  \`\`\`
  <br>
  
  #### Restart data
  \`\`\`http
    GET /api//cruds/restart?persistence=mongodb
  \`\`\`
  <br>
    
  \`\`\`json
  {
      "status": "success",
      "message": "Items restart to orinal file",
      "payload": []
  }
  \`\`\`
  `,
  README: `
  # <center> VSCode Portfolio </center>
  Un sitio web con temática de Visual Studio Code construido con un solo HTML, SASS y JavaScript. Más que un clásico README, voy a contar los desafíos y progresos que atravesé replicando la estética y algunas funcionalidades de VSCode.
  ## 📚 Tech Stack 👨‍💻
  
  **Cliente:**  
  [![My Skills](https://skillicons.dev/icons?i=html,sass,js)](https://skillicons.dev)
  
  **Servidor:**  
  [![My Skills](https://skillicons.dev/icons?i=nodejs,express)](https://skillicons.dev)
  
  **Dependencias:** Axios, Dotenv, Mongoose, Multer, Path, Socket.io.  
  **Librerias:** Bootstrap Icons, SweetAlert2, HighlightJs, MarkedJs.
  
  ## 📃 Documentación 📑
  ### 🤔 ¿Por qué JavaScript y no un Framework?
  En un principio cuando me surgió la idea, veía más viable el proyecto hacerlo con ReactJS, pero entonces se me manifestó un dilema. React me soluciona problemas que no entiendo el origen, y es por ello que decidí utilizar JavaScript y desafiarme a crear mis propios componentes y clases.
  ### 🎨 Color Reference
  En la selección de colores me basé en mi tema que uso a diario en mi VSCode, Drácula.
  
  | Color             | Hex                                                                |
  | ----------------- | ------------------------------------------------------------------ |
  | Background | ![#282A36](https://via.placeholder.com/10/282A36?text=+) #282A36 |
  | Secondary Background | ![#1d1e24](https://via.placeholder.com/10/1d1e24?text=+) #1d1e24 |
  | Grid Border | ![#44475a](https://via.placeholder.com/10/44475a?text=+) #44475a |
  | Font Color | ![#f0f8ff](https://via.placeholder.com/10/f0f8ff?text=+) #f0f8ff |
  | Comment | ![#6272a4](https://via.placeholder.com/10/6272a4?text=+) #6272a4 |
  | Pink | ![#ff79c6](https://via.placeholder.com/10/ff79c6?text=+) #ff79c6 |
  | Purple | ![#bd93f9](https://via.placeholder.com/10/bd93f9?text=+) #bd93f9 |
  
  
  ### 🔲 Layout
  El layout principal del sitio utilicé Grid, y me ayudé con una página, [Layouit!](https://grid.layoutit.com/) que me parece muy útil para los que no somos expertos en CSS. Después en cada componente empleé Flexbox que estoy más familiarizado.
  ### 📱 Responsive
  Muy probable que esta versión, todavía no este 100% óptima para adaptarse a todos los dispositivos. Estaré trabajando en ello.
  
  ## 🔎 Explorer
  ### 📁 "Assets"
  En el sidebar donde se representa la raíz de carpetas, assets fue la primer función que hice para renderizar en la principal vista. Sencilla, pero eficaz, espero que sean de su agrado los memes 😅.
  ### 📝 "PlayGround"
  No sería un IDE si no se puede programar algo. Aunque no tiene ninguna función extra como indentación, resaltar la sintaxis o autocompletado, cumple su objetivo. Próximamente, estaré investigando como integrar todo eso con NodeJs y CodeMirror.
  ## 📚 Stack
  
  ### 📦 "Installed"
  Las tecnologías que están en esta sección son las que estoy familiarizado, conozco su utilidad y su sintaxis, no quiere decir que las controle de principio a fin. En el futuro, estoy dispuesto a aprender a manejarlas, aunque entiendo que no es posible llegar a un dominio total de ellas.
  ### 📖 "Next To Learn"
  Como están presentadas, es el orden esperado a aprenderlas. Por lo que no hice el portfolio en React, es la misma razón que sigo controlando Express y no NestJs. El aprendizaje no es de un día para el otro, es un proceso donde hay que disfrutar las pequeñas victorias. 
  ## ⭐ Bookmarks
  ### 📌 "Favorite"
  Básicamente, están los sitios web que utilice de ayuda para construir el portfolio, y además otros sitios que me parecen interesante de compartir. Continuaré añadiendo más a medida que los descubra.
  ### 📼 "Recommended Channels"
  Con la misma idea que "Favorite", solo que en esta sección comparto los canales de YouTube que consumo a diario y que considero que brindan buen material.  
  Lo interesante de esta sección, es que consumo la api YouTube Data V3 para la información de los canales. Debido a la cantidad de datos que solicito, cumplía la cuota de peticiones diaria en un lapso corto, por ende cree un archivo JSON que funciona como una memoria cache donde se almacena una copia de las respuestas. Este archivo se actualiza cada 24 horas, ya que la información no va a variar demasiado en ese tiempo.
  ## 📞 Contact
  A pesar de su aparente simplicidad como una presentación de mis redes de contacto, su creación resultó más desafiante de lo esperado. Estoy satisfecho con el resultado final, que se asemeja a la estructura de un archivo JSON.
  ## 🐱 Github
  En esta sección, del lado del backend, cree una capa servicio que se encarga de administrar el caché. Es la que se responsabiliza de realizar una copia de las peticiones a la API pública de Github y almacenar en un archivo JSON. Esta capa también se utiliza en Bookmarks para las consultas a la API de YouTube.
  ## 🏆 Logros
  En este proyecto, me enfrenté a numerosos desafíos y experimenté momentos de frustración. Sin embargo, me enorgullece destacar los logros alcanzados, especialmente en el ámbito del frontend. Aunque no sea mi dominio principal, tuve la oportunidad de diseñar completamente el sistema de pestañas desde cero, y estoy muy satisfecho con el resultado obtenido. Otra sección que destaco es la barra lateral 'Explorer', donde simulé el directorio de carpetas y utilicé recursividad para renderizar las subcarpetas.  
  En el lado del Backend, logré implementar el patrón strategy, el cual se encarga de intercambiar la persistencia de los datos en tiempo de ejecución en operaciones CRUD. Además, la capa de servicio de caché fue otro gran logro, ya que resolví las limitaciones de respuestas diarias de las APIs externas, permitiendo la reutilización para realizar otras consultas.
    
    
  Estoy realmente satisfecho con estos logros y el aprendizaje significativo que obtuve durante el desarrollo del proyecto.
  ## Strategy Pattern
  ![STRATEGY](${imgPath.STRATEGY})

  ## Cache Manager
  ![CACHE](${imgPath.CACHE})
  `,
};

export { readme };
