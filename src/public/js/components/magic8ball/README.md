# <center> 🎱 Magic 8 Ball </center>

Es una sencilla aplicación web interactiva que simula el clásico juguete "Magic 8 Ball" para predecir la fortuna. Este juguete es conocido por proporcionar respuestas aleatorias a preguntas de sí o no planteadas por el usuario. La aplicación está construida utilizando HTML, CSS y JavaScript.

## 👷‍♂️ ¿Cómo Funciona?

- **Interfaz de Usuario:** El juego ofrece una interfaz de usuario que muestra un título ("Magic 8 Ball") y un botón.
- **Ingreso de Pregunta:** Cuando el usuario hace clic en el botón "Click para obtener tu respuesta", se genera y muestra una respuesta aleatoria.
- **Generación de Respuesta:** La aplicación selecciona aleatoriamente una respuesta de una lista predefinida de posibles respuestas. Estas respuestas van desde positivas y afirmativas hasta negativas e inciertas.
- **Animación:** La respuesta seleccionada se muestra con una animación de estilo máquina de escribir, donde el texto aparece como si se estuviera escribiendo. La animación le da un toque divertido e interactivo a la aplicación.
- **Reutilización e Interacción:** El usuario puede continuar haciendo preguntas y haciendo clic en el botón para obtener nuevas respuestas aleatorias cada vez.

## 📌 Explicación del Código

El código JavaScript proporcionado define una función **magic8BallRender** que crea y configura la interfaz del juego de la Magic 8 Ball. A continuación, se describe cada uno de los componentes clave:

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

```js
function randomNum(max) {
  return Math.floor(Math.random() * max);
}
function whileSoN() {
  while (jugar != "s" && jugar != "n") {
    jugar = prompt("Te dije S ó N !!! (＞︿＜)").toLowerCase();
  }
}
let jugar = prompt(
  "Hola! (っ◕‿◕)っ ¿Quieres consultarme tu futuro? S/N"
).toLowerCase();
whileSoN();
while (jugar == "s") {
  let pregunta = prompt("(｡◕‿◕｡) Hazme una pregunta..");
  switch (randomNum(10)) {
    case 0:
      alert(pregunta + " " + "(ಠ‿ಠ) Es cierto.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃ ¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 1:
      alert(pregunta + " " + "( ͡° ͜ʖ ͡°) Es decididamente así.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 2:
      alert(pregunta + " " + "(°‿‿°) Sin lugar a dudas.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃ ¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 3:
      alert(
        pregunta + " " + "（　ﾟДﾟ） Respuesta confusa, vuelve a intentarlo."
      );
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 4:
      alert(pregunta + " " + "(⩾﹏⩽) Vuelve a preguntar más tarde.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 5:
      alert(pregunta + " " + "(҂◡_◡) Mejor no decirte ahora.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 6:
      alert(pregunta + " " + "(ಠ_ಠ) No cuentes con ello.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 7:
      alert(pregunta + " " + "(⊙﹏⊙) Mi respuesta es no.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 8:
      alert(pregunta + " " + "(ಥ⌣ಥ) Mis fuentes dicen que no.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 9:
      alert(
        pregunta +
          " " +
          "(╬ ಠ益ಠ) No se, lo unico que puedo afirmar que el Bojo es un flancito"
      );
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
  }
}
alert("Adios (⩾﹏⩽)");
```

## 👤 Authors

- [@mvazquezmartin](https://github.com/mvazquezmartin)<base target="_blank">
- [Repositorio](https://github.com/mvazquezmartin/practica_js.git)<base target="_blank">
