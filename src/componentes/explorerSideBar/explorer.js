import {
  assetsFolder,
  folder1,
  magic8Ball,
  playGroundFolder,
  readmeFile,
} from "./folderFileObj.js";
import { folderFileSideBar } from "./folderFileRender.js";

const renderExplorer = () => {
  const fileOpen = document.getElementById("fileOpen");
  fileOpen.textContent = "PORTFOLIO";

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
  const magic8ball = folderFileSideBar(magic8Ball);
  viewSideBar.appendChild(magic8ball);
  const carpetaPrueba = folderFileSideBar(folder1);
  viewSideBar.appendChild(carpetaPrueba);
};

export { renderExplorer };
