const renderMainText = () => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";

  const tabs = document.getElementById("tabs");
  tabs.innerHTML = "";

  const fileOpen = document.getElementById("fileOpen");
  fileOpen.textContent = "PORTFOLIO";

  const mainArea = document.getElementById("mainArea");
  mainArea.style.gridTemplateAreas = `
  "tabs tabs tabs"
  "mainView mainView mainView"
  "mainView mainView mainView"
  `;
  const titleSideBar = document.getElementById("titleSideBar");
  titleSideBar.textContent = "INICIO";

  const rootPath = document.getElementById("rootPath");
  rootPath.style.display = "none";

  //estructura
  const miNodo = document.createElement("div");
  miNodo.classList.add("containerHeroView");

  //container Hero aside
  const miNodoHeroContainer = document.createElement("div");
  miNodoHeroContainer.classList.add("containerIntroAside");

  //titulo portfolio
  const miNodoTituloContainer = document.createElement("div");
  miNodoTituloContainer.classList.add("titleMain");

  const miNodoTitulo = document.createElement("h1");
  miNodoTitulo.textContent = "Matias Vazquez Martin";

  const miNodoSubTitulo = document.createElement("h2");
  miNodoSubTitulo.textContent = "FullStack Dev";

  //informacion de navagacion y ultimos trabajos
  const miNodoDescription = document.createElement("div");
  miNodoDescription.classList.add("descriptionMain");

  const miNodoTituloStart = document.createElement("h6");
  miNodoTituloStart.textContent = "Start";

  const miNodoIconoIndice = document.createElement("i");
  miNodoIconoIndice.classList.add("bi", "bi-files");
  miNodoIconoIndice.textContent = "Inidice";

  const miNodoIconoStack = document.createElement("i");
  miNodoIconoStack.classList.add("bi", "bi-files");
  miNodoIconoStack.textContent = "Stack";

  const miNodoTituloRecientes = document.createElement("h6");
  miNodoTituloRecientes.textContent = "Recientes";

  //container Hero aside
  const miNodoHeroContainerAside = document.createElement("div");
  miNodoHeroContainerAside.classList.add("containerIntroAside");
  miNodoHeroContainerAside.textContent = "ESTO ES UNA PRUEBA";

  //inserto mi Nodo
  miNodo.appendChild(miNodoHeroContainer);
  miNodoHeroContainer.appendChild(miNodoTituloContainer);
  miNodoTituloContainer.appendChild(miNodoTitulo);
  miNodoTituloContainer.appendChild(miNodoSubTitulo);
  miNodoHeroContainer.appendChild(miNodoDescription);
  miNodoDescription.appendChild(miNodoTituloStart);
  miNodoDescription.appendChild(miNodoIconoIndice);
  miNodoDescription.appendChild(miNodoIconoStack);
  miNodoDescription.appendChild(miNodoTituloRecientes);
  miNodo.appendChild(miNodoHeroContainerAside);
  mainView.appendChild(miNodo);
};

export { renderMainText };
