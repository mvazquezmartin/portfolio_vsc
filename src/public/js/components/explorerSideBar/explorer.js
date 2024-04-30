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
  guessTheNumber,
} from './folderFileObj.js';
import { folderFileSideBar } from './folderFileRender.js';

const folderArray = [
  assetsFolder,
  followMe,
  guessTheColor,
  guessTheNumber,
  magic8Ball,
  pongWarsFolder,
  playGroundFolder,
  chat,
  crud,
  dotenv,
  gitIgnore,
  packageJson,
  readme,
];

const renderExplorer = () => {
  const $titleSideBar = document.getElementById('titleSideBar');
  $titleSideBar.textContent = 'EXPLORER';

  const $viewSideBar = document.getElementById('viewSideBar');
  $viewSideBar.innerHTML = '';

  const fileOpen = document.getElementById('fileOpen');
  fileOpen.textContent = 'PORTFOLIO';

  //Carpetas en Explorer
  folderArray.forEach((folder) => {
    const newFolder = folderFileSideBar(folder);
    $viewSideBar.appendChild(newFolder);
  });

  const collapseFolder = document.createElement('i');
  collapseFolder.classList.add('bi', 'bi-chevron-bar-contract');

  const $allFolder = document.querySelectorAll('.panel');
  collapseFolder.addEventListener('click', () => {
    $allFolder.forEach((folder) => (folder.style.maxHeight = null));
  });

  fileOpen.appendChild(collapseFolder);
};

export { renderExplorer };
