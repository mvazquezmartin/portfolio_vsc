import { folders } from './folderFileObj.js';
import { folderFileSideBar } from './folderFileRender.js';

const renderExplorer = () => {
  const $titleSideBar = document.getElementById('titleSideBar');
  $titleSideBar.textContent = 'EXPLORER';

  const $viewSideBar = document.getElementById('viewSideBar');
  $viewSideBar.innerHTML = '';

  const fileOpen = document.getElementById('fileOpen');
  fileOpen.textContent = 'PORTFOLIO';

  //Carpetas en Explorer
  folders.forEach((folder) => {
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
