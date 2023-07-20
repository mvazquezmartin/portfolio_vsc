const ilyudo = (img, name) => {
  const rootPath = document.getElementById("rootPath");
  rootPath.style.display = "flex";
  rootPath.innerHTML = `Assets > ${name}.jpg`;

  const miNodo = document.createElement("div");
  const miNodoImg = document.createElement("img");
  miNodoImg.classList.add("assets");
  miNodoImg.setAttribute("src", img);
  miNodo.appendChild(miNodoImg);
  mainView.appendChild(miNodo);  
};

export { ilyudo };
