const ilyudo = (img, name) => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";
  mainView.style.overflowY = "auto";
  mainArea.style.gridTemplateAreas = `
  "tabs tabs tabs"
  "rootPath rootPath rootPath"
  "mainView mainView mainView"
  `;

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
