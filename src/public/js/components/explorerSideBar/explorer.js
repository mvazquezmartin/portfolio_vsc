import {
  assetsFolder,
  chat,
  folder1,
  magic8Ball,
  playGroundFolder,
} from "./folderFileObj.js";
import { folderFileSideBar } from "./folderFileRender.js";

const renderExplorer = () => {
  const titleSideBar = document.getElementById("titleSideBar");
  titleSideBar.textContent = "EXPLORER";

  const viewSideBar = document.getElementById("viewSideBar");
  viewSideBar.innerHTML = "";

  const fileOpen = document.getElementById("fileOpen");
  fileOpen.textContent = "PORTFOLIO";

  //Carpetas en Explorer
  const assets = folderFileSideBar(assetsFolder);
  viewSideBar.appendChild(assets);

  const magic8ball = folderFileSideBar(magic8Ball);
  viewSideBar.appendChild(magic8ball);

  const playGround = folderFileSideBar(playGroundFolder);
  viewSideBar.appendChild(playGround);

  const chatSocket = folderFileSideBar(chat);
  viewSideBar.appendChild(chatSocket);

  const carpetaPrueba = folderFileSideBar(folder1);
  viewSideBar.appendChild(carpetaPrueba);

  const collapseFolder = document.createElement("i");
  collapseFolder.classList.add("bi", "bi-chevron-bar-contract");
  collapseFolder.addEventListener("click", renderExplorer);

  fileOpen.appendChild(collapseFolder);
};

export { renderExplorer };
