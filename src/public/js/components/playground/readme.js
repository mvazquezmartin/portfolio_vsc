const readmeRender = () => {
  const path = document.getElementById("rootPath");

  path.textContent = "Portfolio > PlayGround > readme.txt";

  const miNodo = document.createElement("div");
  miNodo.classList.add("readme");

  const lineNumbers = document.createElement("div");
  lineNumbers.classList.add("line-numbers");

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const text = document.createElement("p");
  text.textContent = `Quiero expresar mi más sincero agradecimiento a EazyTutorial por el increíble\ntrabajo que ha estado haciendo en la comunidad de FrontEnd. Su dedicación y\npasión por compartir información y conocimientos es realmente admirable\ny ha sido una fuente de inspiración. Sus tutoriales son claros, concisos\ny están llenos de información valiosa. Han sido una herramienta invaluable\nen mi propio viaje de aprendizaje en FrontEnd. Desde HTML y CSS hasta\nJavaScript y React, sus lecciones han sido fundamentales en mi comprensión\nde estas tecnologías.\n\nAdemás, quiero agradecerles por ser una fuente constante de motivación y\naliento. A veces puede ser abrumador aprender una nueva habilidad, pero\nsus palabras de aliento y apoyo han sido un impulso increíble para seguir\nadelante.\n\nEn resumen, no puedo agradecerles lo suficiente por el increíble trabajo\nque hacen. Ustedes están haciendo una diferencia real en la vida de las\npersonas, y estoy seguro de que muchos, como yo, están agradecidos por su\ntrabajo.\n\nDe nuevo, gracias por compartir su conocimiento y por ser una fuente de\ninspiración constante. Espero con ansias seguir aprendiendo de ustedes en\nel futuro.`;

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

export { readmeRender };
