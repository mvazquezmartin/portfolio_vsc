import { imgPath } from "../../assetsPath/assetsPath.js";
// import { repositories } from "./repositoriesObj.js";
// import { repositoriesRender } from "./repositoriesRender.js";

const githubMainRender = async () => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";

  const path = document.getElementById("rootPath");
  path.textContent = "Portfolio > Github";

  const containerGithub = document.createElement("div");
  containerGithub.classList.add("containerGitHub");

  const calendar = document.createElement("img");
  calendar.setAttribute("src", imgPath.CALENDAR);

  containerGithub.appendChild(calendar);
  mainView.appendChild(containerGithub);
};

export { githubMainRender };
