import {
  assetsFolder,
  chat,
  dotenv,
  crud,
  gitIgnore,
  magic8Ball,
  packageJson,
  playGroundFolder,
  pongWarsFolder,
  readme,
  guessTheColor,
  followMe,
} from './folderFileObj.js';
import { folderFileSideBar } from './folderFileRender.js';

const renderExplorer = () => {
  const titleSideBar = document.getElementById('titleSideBar');
  titleSideBar.textContent = 'EXPLORER';

  const viewSideBar = document.getElementById('viewSideBar');
  viewSideBar.innerHTML = '';

  const fileOpen = document.getElementById('fileOpen');
  fileOpen.textContent = 'PORTFOLIO';

  //Carpetas en Explorer
  const assets = folderFileSideBar(assetsFolder);
  viewSideBar.appendChild(assets);

  const magic8ball = folderFileSideBar(magic8Ball);
  viewSideBar.appendChild(magic8ball);

  const playGround = folderFileSideBar(playGroundFolder);
  viewSideBar.appendChild(playGround);

  const pongWars = folderFileSideBar(pongWarsFolder);
  viewSideBar.appendChild(pongWars);

  const guessTheColorGame = folderFileSideBar(guessTheColor);
  viewSideBar.appendChild(guessTheColorGame);

  const followMeGame = folderFileSideBar(followMe);
  viewSideBar.appendChild(followMeGame);

  const chatSocket = folderFileSideBar(chat);
  viewSideBar.appendChild(chatSocket);

  const crudFolder = folderFileSideBar(crud);
  viewSideBar.appendChild(crudFolder);

  const env = folderFileSideBar(dotenv);
  viewSideBar.appendChild(env);

  const ignore = folderFileSideBar(gitIgnore);
  viewSideBar.appendChild(ignore);

  const json = folderFileSideBar(packageJson);
  viewSideBar.appendChild(json);

  const readmeMain = folderFileSideBar(readme);
  viewSideBar.appendChild(readmeMain);

  const collapseFolder = document.createElement('i');
  collapseFolder.classList.add('bi', 'bi-chevron-bar-contract');
  collapseFolder.addEventListener('click', renderExplorer);

  fileOpen.appendChild(collapseFolder);
};

export { renderExplorer };
