import { imgPath } from "../../assetsPath/assetsPath.js";
import { repositories } from "./repositoriesObj.js";
import { repositoriesRender } from "./repositoriesRender.js";

const githubMainRender = async () => {
  const titleSideBar = document.getElementById("titleSideBar");
  titleSideBar.textContent = "GITHUB";

  const fileOpen = document.getElementById("fileOpen");
  fileOpen.textContent = "REPOSITORIES";

  const viewSideBar = document.getElementById("viewSideBar");
  viewSideBar.innerHTML = "";

  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";

  const repositoriesContainer = document.createElement("div");
  repositoriesContainer.classList.add("repositoriesContainer");

  const containerGithub = document.createElement("div");
  containerGithub.classList.add("containerGitHub");

  const calendar = document.createElement("img");
  calendar.setAttribute("src", imgPath.CALENDAR);

  viewSideBar.appendChild(repositoriesContainer);
  containerGithub.appendChild(calendar);
  mainView.appendChild(containerGithub);

  repositoriesRender(repositories, repositoriesContainer);
};

export { githubMainRender };
