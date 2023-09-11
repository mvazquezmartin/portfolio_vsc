const highlight = (ruta, txt, language) => {
  const path = document.getElementById("rootPath");
  path.textContent = ruta;

  const container = document.createElement("div");
  container.classList.add("containerHl");

  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.classList.add("hljs", `language-${language}`);
  code.textContent = txt;

  container.appendChild(pre);
  pre.appendChild(code);

  mainView.appendChild(container);  
};

export { highlight };
