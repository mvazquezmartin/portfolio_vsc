import { iconPath } from "../../assetsPath/assetsPath.js";
import { tabManager } from "../tabs/TabsManager.js";
import { renderMainGithub } from "./renderMainGithub.js";
import { renderRepositoryCard } from "./renderRepositoryCard.js";
import { repositories } from "./repositoriesObj.js";

const cacheData = {};

const renderRepositories = async () => {
  const titleSideBar = document.getElementById("titleSideBar");
  titleSideBar.textContent = "GITHUB";

  const fileOpen = document.getElementById("fileOpen");
  fileOpen.textContent = "REPOSITORIES";

  const viewSideBar = document.getElementById("viewSideBar");
  viewSideBar.innerHTML = "";

  const repositoriesContainer = document.createElement("div");
  repositoriesContainer.classList.add("repositoriesContainer");

  const fetchPromises = repositories.map(async (repository) => {
    try {
      if (!cacheData[repository]) {
        const response = await fetch(
          `https://api.github.com/repos/mvazquezmartin/${repository}`
        );
        console.log("Testigo");
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta de la API");
        }
        const data = await response.json();
        cacheData[repository] = data;
      }

      renderRepositoryCard(cacheData[repository], repositoriesContainer);
    } catch (error) {
      console.log(error);
    }
  });

  await Promise.all(fetchPromises);

  viewSideBar.appendChild(repositoriesContainer);
  tabManager.create("Github", renderMainGithub, iconPath.GITHUB);
};

export { renderRepositories };

// .then((data) => {
//   const repositoryCard = document.createElement("div");
//   repositoryCard.classList.add("repositoryCard");

//   const dataRepo = document.createElement("div");
//   dataRepo.classList.add("dataRepo");

//   const titleContainer = document.createElement("span");

//   const iconLink = document.createElement("i");
//   iconLink.classList.add("bi", "bi-link-45deg");
//   const title = document.createElement("a");
//   title.classList.add("titleRepo");
//   title.setAttribute("href", data.html_url);
//   title.setAttribute("target", "_blank");
//   title.textContent = data.name;

//   const language = document.createElement("p");
//   language.textContent = data.language;

//   const contentContainer = document.createElement("div");
//   contentContainer.classList.add("contentContainer");
//   const content = document.createElement("p");
//   content.textContent = data.description;

//   titleContainer.appendChild(iconLink);
//   titleContainer.appendChild(title);
//   dataRepo.appendChild(titleContainer);
//   dataRepo.appendChild(language);
//   repositoryCard.appendChild(dataRepo);
//   contentContainer.appendChild(content);
//   repositoryCard.appendChild(contentContainer);
//   repositoriesContainer.appendChild(repositoryCard);
// });
