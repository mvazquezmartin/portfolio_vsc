import { isRender } from "../../isRender.js";
import { folderFileSideBar } from "./folderFileRender.js";

export const renderExplorer = () => {
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
  viewSideBar.innerHTML = "";

  const titleSideBar = document.getElementById("titleSideBar");
  titleSideBar.textContent = "EXPLORER";

  //Explorardor de archivos
  folderFileSideBar("Assets", ["Archivo1", "Archivo2", "Archivo3"]);
  folderFileSideBar("Home", ["Archivo4", "Archivo5"]);
  folderFileSideBar("Proyecto", ["Archivo4", "Archivo5"]);
  folderFileSideBar("PlayGround", ["Archivo4", "Archivo5"]);
};
