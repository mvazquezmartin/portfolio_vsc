import { iconPath } from '../../assetsPath/assetsPath.js';
import { tabManager } from '../tabs/TabsManager.js';
import { renderMainGithub } from './renderMainGithub.js';
import { renderStarredCard } from './renderStarredCard.js';

const cacheData = {};

const renderGithub = async () => {
  const titleSideBar = document.getElementById('titleSideBar');
  titleSideBar.textContent = 'GITHUB';

  const fileOpen = document.getElementById('fileOpen');
  fileOpen.textContent = 'STARRED ☆';

  const viewSideBar = document.getElementById('viewSideBar');
  viewSideBar.innerHTML = '';

  const repositoriesContainer = document.createElement('div');
  repositoriesContainer.classList.add('repositoriesContainer');

  try {
    if (Object.keys(cacheData).length === 0) {
      const response = await fetch('/github/starred');

      if (!response.ok) {
        throw new Error('No se pudo obtener la respuesta de la API');
      }

      const data = await response.json();
      cacheData['github/starred'] = data;
    }

    const data = cacheData['github/starred'];
    const dataToArray = data.payload;
    const dataLastTen = dataToArray.reverse().slice(0, 10);

    dataLastTen.forEach((repo) => {
      renderStarredCard(repo, repositoriesContainer);
    });

    viewSideBar.appendChild(repositoriesContainer);
    tabManager.create('Github', renderMainGithub, iconPath.GITHUB);
  } catch (error) {
    console.error(error);
  }
};

export { renderGithub };

// import { iconPath } from "../../assetsPath/assetsPath.js";
// import { tabManager } from "../tabs/TabsManager.js";
// import { renderMainGithub } from "./renderMainGithub.js";
// import { renderRepositoryCard } from "./renderRepositoryCard.js";
// import { repositories } from "./repositoriesObj.js";

// const cacheData = {};

// const renderRepositories = async () => {
//   const titleSideBar = document.getElementById("titleSideBar");
//   titleSideBar.textContent = "GITHUB";

//   const fileOpen = document.getElementById("fileOpen");
//   fileOpen.textContent = "REPOSITORIES";

//   const viewSideBar = document.getElementById("viewSideBar");
//   viewSideBar.innerHTML = "";

//   const repositoriesContainer = document.createElement("div");
//   repositoriesContainer.classList.add("repositoriesContainer");

// const fetchPromises = repositories.map(async (repository) => {
//   try {
//     if (!cacheData[repository]) {
//       const response = await fetch(
//         `https://api.github.com/repos/mvazquezmartin/${repository}`
//       );
//       if (!response.ok) {
//         throw new Error("No se pudo obtener la respuesta de la API");
//       }
//       const data = await response.json();
//       cacheData[repository] = data;
//     }

//     renderRepositoryCard(cacheData[repository], repositoriesContainer);
//   } catch (error) {
//     console.log(error);
//   }
// });

//   await Promise.all(fetchPromises);

//   viewSideBar.appendChild(repositoriesContainer);
//   tabManager.create("Github", renderMainGithub, iconPath.GITHUB);
// };

// export { renderRepositories };
