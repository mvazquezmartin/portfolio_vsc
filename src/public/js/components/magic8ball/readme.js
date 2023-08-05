import { imgPath } from "../../assetsPath/assetsPath.js";

const readmeRender8Ball = () => {
  const path = document.getElementById("rootPath");
  path.textContent = "Portfolio > Magic8Ball > magic8Ball.txt";

  const readmeContainerM8b = document.createElement("div");
  readmeContainerM8b.classList.add("readmeContainerM8b");

  const miNodo = document.createElement("div");
  miNodo.classList.add("readme");

  const lineNumbers = document.createElement("div");
  lineNumbers.classList.add("line-numbers");

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const text = document.createElement("p");

  text.textContent = `La Magic 8 Ball es un juguete de predicción que utiliza un mecanismo\nde respuesta aleatoria para ofrecer respuestas a preguntas sí o no.\nCon una forma esférica y un cristal líquido en su interior, los usuarios\nagitan la bola y le hacen una pregunta. Luego, la bola revela una respuesta en una\nventana que va desde "sí", "no" hasta respuestas ambiguas como "pregúntame de nuevo".\nEs popular en juegos y se utiliza para tomar decisiones o buscar\norientación en situaciones divertidas.\n\nEste pequeño proyecto fueron mis primeros pasos en JavaScript.\nA continuación, está el código original que funcionaba con alert y prompt,\nfunción con while, utilizando switch. Siempre intenté aplicar todo lo aprendido\nen mis proyectos, pero a veces menos es más.\nPor el aprecio que me genera ver mis comienzos, optimice el código empleando un array\npara las respuestas y una función Math.ramdom con parámetro length del array\npara obtener una respuesta al azar. De esta forma simplificando el código,\ny de un aspecto más legible.`;

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");

  const linkGitHub = document.createElement("a");
  linkGitHub.href = "https://github.com/mvazquezmartin/practica_js.git";
  linkGitHub.target = "_blank";

  const imgCode = document.createElement("img");
  imgCode.setAttribute("src", imgPath.M8B_CODE);

  miNodo.appendChild(lineNumbers);
  miNodo.appendChild(textContainer);
  textContainer.appendChild(text);
  linkGitHub.appendChild(imgCode);
  imgContainer.appendChild(linkGitHub);
  readmeContainerM8b.appendChild(miNodo);
  readmeContainerM8b.appendChild(imgContainer);

  // Add line numbers
  for (let i = 1; i <= text.textContent.split("\n").length; i++) {
    const lineNumber = document.createElement("span");
    lineNumber.textContent = i;
    lineNumbers.appendChild(lineNumber);
  }
  mainView.append(readmeContainerM8b);
};

export { readmeRender8Ball };
