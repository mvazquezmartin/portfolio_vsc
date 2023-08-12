const readmeCreate = (ruta, readmetxt) => {
  const path = document.getElementById("rootPath");

  path.textContent = ruta;

  const miNodo = document.createElement("div");
  miNodo.classList.add("readme");

  const textContainer = document.createElement("div");
  textContainer.classList.add("readmeStyle");

  const text = document.createElement("div");
  text.setAttribute("id", "markdown-content");

  miNodo.appendChild(textContainer);
  textContainer.appendChild(text);
  mainView.append(miNodo);

  document.getElementById("markdown-content").innerHTML =
    marked.parse(readmetxt);
};

export { readmeCreate };
