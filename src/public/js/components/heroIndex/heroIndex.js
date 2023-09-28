import { renderExtension } from "./recommendedExtension.js";
import { renderDeveloped } from "./renderDeveloped.js";
import { createIconWithText, createRecent } from "./renderHeroStar.js";

const renderMainText = () => {
  const rootPath = document.getElementById("rootPath");
  rootPath.textContent = "";
  rootPath.style.visibility = "hidden";

  //estructura
  const containerMainHero = document.createElement("div");
  containerMainHero.classList.add("containerHeroView");

  //container Hero aside
  const heroContainer = document.createElement("div");
  heroContainer.classList.add("containerIntroLeft");

  //titulo portfolio
  const tituloContainer = document.createElement("div");
  tituloContainer.classList.add("titleMain");

  const tituloHero = document.createElement("h1");
  tituloHero.textContent = "Matías Vazquez Martin";

  const subTituloHero = document.createElement("h2");
  subTituloHero.textContent = "FullStack Developer Jr";

  //informacion de navagacion y ultimos trabajos
  const containerStartAndRecent = document.createElement("div");
  containerStartAndRecent.classList.add("startAndRecent");

  const containerStart = document.createElement("div");
  containerStart.classList.add("containerStart");

  const tituloDescription = document.createElement("h2");
  tituloDescription.textContent = "Start";

  const newFile = createIconWithText("bi bi-file-earmark-plus", "New File...");
  const openFile = createIconWithText(
    "bi bi-file-earmark-arrow-up",
    "Open File..."
  );
  const openFolder = createIconWithText("bi bi-folder2-open", "Open Folder...");
  const cloneRepo = createIconWithText(
    "bi bi-diagram-2",
    "Clone Git Repository..."
  );
  const connectTo = createIconWithText(
    "bi bi-arrow-left-right",
    "Connect to..."
  );

  const containerRecent = document.createElement("div");
  containerRecent.classList.add("containerRecent");

  const tituloRecientesDescription = document.createElement("h2");
  tituloRecientesDescription.textContent = "Recent";

  const ecommerce = createRecent("ecommerceMongodb", "ecommerce-api");
  const magicNumber = createRecent("guessmagicnumber", "app");
  const app = createRecent("WhatWouldYouRather", "Proyect");
  const dsm = createRecent("DSM_reactjs", "front");
  const portfolio = createRecent("VSCodeMvm", "myStuff");

  //container Hero aside
  const containerHeroAside = document.createElement("div");
  containerHeroAside.classList.add("containerIntroRight");

  containerMainHero.appendChild(heroContainer);
  heroContainer.appendChild(tituloContainer);
  tituloContainer.appendChild(tituloHero);
  tituloContainer.appendChild(subTituloHero);
  heroContainer.appendChild(containerStartAndRecent);
  containerStartAndRecent.appendChild(containerStart);
  containerStart.appendChild(tituloDescription);
  containerStart.appendChild(newFile);
  containerStart.appendChild(openFile);
  containerStart.appendChild(openFolder);
  containerStart.appendChild(cloneRepo);
  containerStart.appendChild(connectTo);
  containerStartAndRecent.appendChild(containerRecent);
  containerRecent.appendChild(tituloRecientesDescription);
  containerRecent.appendChild(ecommerce);
  containerRecent.appendChild(dsm);
  containerRecent.appendChild(magicNumber);
  containerRecent.appendChild(app);
  containerRecent.appendChild(portfolio);

  containerMainHero.appendChild(containerHeroAside);

  const extension = renderExtension();
  containerHeroAside.appendChild(extension);

  renderDeveloped(containerHeroAside);

  mainView.appendChild(containerMainHero);
};

export { renderMainText };
