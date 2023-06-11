const readmeRender8Ball = () => {
  const path = document.getElementById("rootPath");
  path.textContent = "Portfolio > Magic8Ball > magic8Ball.txt";

  const miNodo = document.createElement("div");
  miNodo.classList.add("readme");

  const lineNumbers = document.createElement("div");
  lineNumbers.classList.add("line-numbers");

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const text = document.createElement("p");
  text.textContent = `El juego Magic 8 Ball es una herramienta adivinatoria que se basa en una esfera negra de plástico con respuestas escritas en su interior. Al hacerle una pregunta y agitarlo, revela una respuesta a través de una pieza flotante. Es utilizado de forma lúdica para obtener respuestas rápidas y entretenidas a preguntas diversas.`;

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

export { readmeRender8Ball };
