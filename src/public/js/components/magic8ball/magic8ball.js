const magic8BallRender = () => {
  const rta = [
    "😀 Es cierto.",
    "😄 Es decididamente así. ",
    "😁 Sin lugar a dudas.",
    "😊 Si, definitivamente.",
    "😉 Puedes confiar de ello.",
    "😋 Como yo lo veo, si.",
    "🙂 Lo mas probable. ",
    "🤭 Perspectiva buena. ",
    "🙃 Si.",
    "🤗 Las señales apuntan a que sí.",
    "😖 Respuesta confusa, vuelve a intentarlo.",
    "😴 Vuelve a preguntar más tarde.",
    "😫 Mejor no decirte ahora.",
    "🥱 No se puede predecir ahora.",
    "😑 Concéntrate y vuelve a preguntar.",
    "😣 No cuentes con ello.",
    "😕 Mi respuesta es no.",
    "🤐 Mis fuentes dicen que no.",
    "😞 Las perspectivas no son muy buenas. ",
    "😧 Muy dudoso.  ",
  ];

  const path = document.getElementById("rootPath");
  path.textContent = "Portfolio > Magic8Ball > magic8Ball.js";

  const containerM8B = document.createElement("div");
  containerM8B.classList.add("containerM8B");

  const borderContainer = document.createElement("div");
  borderContainer.classList.add("borderContainer");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("titleM8B");

  const title = document.createElement("h1");
  title.classList.add("glitch")
  title.setAttribute("data-text", "Magic 8 Ball")
  title.textContent = "Magic 8 Ball";

  const buttonPregunta = document.createElement("div");
  buttonPregunta.classList.add("btnRta");
  buttonPregunta.textContent = "Click para obtener tu respuesta";
  buttonPregunta.addEventListener("click", getRta);

  const respuestaContainer = document.createElement("div");
  respuestaContainer.classList.add("respuestaContainer");

  const respuesta = document.createElement("div");
  respuesta.classList.add("respuesta");
  respuesta.setAttribute("id", "res");

  function getRta() {
    const indice = Math.floor(Math.random() * rta.length);
    const DOMRta = document.getElementById("res");
    const respuestaText = rta[indice];
    const typingDuration = 75 * respuestaText.length;

    DOMRta.textContent = respuestaText;
    DOMRta.style.setProperty("--rta-length", respuestaText.length);

    // Reiniciar la animación
    DOMRta.style.animation = "none";
    void DOMRta.offsetWidth;
    DOMRta.style.animation = `typing ${typingDuration}ms steps(${respuestaText.length}) 1s 1 normal both, blink 650ms steps(44) infinite normal`;
  }

  containerM8B.appendChild(borderContainer);
  borderContainer.appendChild(titleContainer);
  titleContainer.appendChild(title);
  borderContainer.appendChild(buttonPregunta);
  borderContainer.appendChild(respuestaContainer);
  respuestaContainer.appendChild(respuesta);
  mainView.appendChild(containerM8B);
};

export { magic8BallRender };
