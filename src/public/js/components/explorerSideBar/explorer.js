import {
  assetsFolder,
  chat,
  dotenv,
  folder1,
  gitIgnore,
  magic8Ball,
  packageJson,
  playGroundFolder,
  readme,
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

  const env = folderFileSideBar(dotenv);
  viewSideBar.appendChild(env);

  const readmeMain = folderFileSideBar(readme);
  viewSideBar.appendChild(readmeMain);

  const ignore = folderFileSideBar(gitIgnore);
  viewSideBar.appendChild(ignore);

  const json = folderFileSideBar(packageJson);
  viewSideBar.appendChild(json);

  const collapseFolder = document.createElement("i");
  collapseFolder.classList.add("bi", "bi-chevron-bar-contract");
  collapseFolder.addEventListener("click", renderExplorer);

  fileOpen.appendChild(collapseFolder);
};

export { renderExplorer };
