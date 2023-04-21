import { isRender } from "../../isRender.js";
import {
  assetsFolder,
  folder1,
  playGroundFolder,
  readmeFile,
} from "./folderFileObj.js";
import { folderFileSideBar } from "./folderFileRender.js";

const renderExplorer = () => {
  isRender.stack = false;

  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";

  const rootPath = document.getElementById("rootPath");
  rootPath.innerHTML = "";

  const fileOpen = document.getElementById("fileOpen");
  fileOpen.textContent = "PORTFOLIO";

  const mainArea = document.getElementById("mainArea");
  mainArea.style.gridTemplateAreas = `
  "tabs tabs tabs"
  "rootPath rootPath rootPath"
  "mainView mainView mainView"
  `;

  const viewSideBar = document.getElementById("viewSideBar");
  viewSideBar.style.overflowY = "auto";
  viewSideBar.innerHTML = "";

  const titleSideBar = document.getElementById("titleSideBar");
  titleSideBar.textContent = "EXPLORER";

  const readme = folderFileSideBar(readmeFile);
  viewSideBar.appendChild(readme);
  const assets = folderFileSideBar(assetsFolder);
  viewSideBar.appendChild(assets);
  const playGround = folderFileSideBar(playGroundFolder);
  viewSideBar.appendChild(playGround);
  const carpetaPrueba = folderFileSideBar(folder1);
  viewSideBar.appendChild(carpetaPrueba);

  //Explorardor de archivos
  // folderFileSideBar("Assets", ["Archivo1", "Archivo2", "Archivo3"]);
  // folderFileSideBar("Home", ["Archivo4", "Archivo5"]);
  // folderFileSideBar("Proyecto", ["Archivo4", "Archivo5"]);
  // folderFileSideBar("PlayGround", ["PlayGround.js"], playGroundRender,iconoJs);
};

export { renderExplorer };
