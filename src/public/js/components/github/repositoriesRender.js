import { iconPath } from "../../assetsPath/assetsPath.js";
import { tabManager } from "../tabs/TabsManager.js";
import { githubMainRender } from "./gridRender.js";
import { repositories } from "./repositoriesObj.js";

const repositoriesRender = () => {
  const titleSideBar = document.getElementById("titleSideBar");
  titleSideBar.textContent = "GITHUB";

  const fileOpen = document.getElementById("fileOpen");
  fileOpen.textContent = "REPOSITORIES";
  
  const viewSideBar = document.getElementById("viewSideBar");
  viewSideBar.innerHTML = "";

  const repositoriesContainer = document.createElement("div");
  repositoriesContainer.classList.add("repositoriesContainer");

  repositories.forEach((repository) => {
    fetch(`https://api.github.com/repos/mvazquezmartin/${repository}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta de la API");
        }
        return response.json();
      })
      .then((data) => {
        const repositoryCard = document.createElement("div");
        repositoryCard.classList.add("repositoryCard");

        const dataRepo = document.createElement("div");
        dataRepo.classList.add("dataRepo");

        const titleContainer = document.createElement("span");

        const iconLink = document.createElement("i");
        iconLink.classList.add("bi", "bi-link-45deg");
        const title = document.createElement("a");
        title.classList.add("titleRepo");
        title.setAttribute("href", data.html_url);
        title.setAttribute("target", "_blank");
        title.textContent = data.name;

        const language = document.createElement("p");
        language.textContent = data.language;

        const contentContainer = document.createElement("div");
        contentContainer.classList.add("contentContainer");
        const content = document.createElement("p");
        content.textContent = data.description;

        titleContainer.appendChild(iconLink);
        titleContainer.appendChild(title);
        dataRepo.appendChild(titleContainer);
        dataRepo.appendChild(language);
        repositoryCard.appendChild(dataRepo);
        contentContainer.appendChild(content);
        repositoryCard.appendChild(contentContainer);
        repositoriesContainer.appendChild(repositoryCard);
        viewSideBar.appendChild(repositoriesContainer);
      });
  });
  tabManager.create("Github", githubMainRender, iconPath.GITHUB);
};

export { repositoriesRender };
