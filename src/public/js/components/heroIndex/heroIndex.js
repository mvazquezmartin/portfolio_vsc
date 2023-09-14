import { renderDeveloped } from "./renderDeveloped.js";

const renderMainText = () => {
  const rootPath = document.getElementById("rootPath");
  rootPath.textContent = "";
  rootPath.style.visibility = "hidden";

  //estructura
  const containerMainHero = document.createElement("div");
  containerMainHero.classList.add("containerHeroView");

  //container Hero aside
  const heroContainer = document.createElement("div");
  heroContainer.classList.add("containerIntroAside");

  //titulo portfolio
  const tituloContainer = document.createElement("div");
  tituloContainer.classList.add("titleMain");

  const tituloHero = document.createElement("h1");
  tituloHero.textContent = "Matias Vazquez Martin";

  const subTituloHero = document.createElement("h2");
  subTituloHero.textContent = "FullStack Dev";

  //informacion de navagacion y ultimos trabajos
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("descriptionMain");

  const tituloDescription = document.createElement("h6");
  tituloDescription.textContent = "Start";

  const iconoDescription = document.createElement("i");
  iconoDescription.classList.add("bi", "bi-files");
  iconoDescription.textContent = "Inidice";

  const iconoStackDescription = document.createElement("i");
  iconoStackDescription.classList.add("bi", "bi-files");
  iconoStackDescription.textContent = "Stack";

  const tituloRecientesDescription = document.createElement("h6");
  tituloRecientesDescription.textContent = "Recientes";

  //container Hero aside
  const heroContainerAside = document.createElement("div");
  heroContainerAside.classList.add("containerIntroAside");

  containerMainHero.appendChild(heroContainer);
  heroContainer.appendChild(tituloContainer);
  tituloContainer.appendChild(tituloHero);
  tituloContainer.appendChild(subTituloHero);
  heroContainer.appendChild(descriptionContainer);
  descriptionContainer.appendChild(tituloDescription);
  descriptionContainer.appendChild(iconoDescription);
  descriptionContainer.appendChild(iconoStackDescription);
  descriptionContainer.appendChild(tituloRecientesDescription);
  containerMainHero.appendChild(heroContainerAside);

  renderDeveloped(heroContainerAside);

  mainView.appendChild(containerMainHero);
};

export { renderMainText };
