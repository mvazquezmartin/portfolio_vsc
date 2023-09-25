import { imgPath } from "../../assetsPath/assetsPath.js";

const renderMainGithub = async () => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";

  const path = document.getElementById("rootPath");
  path.textContent = "@mvazquezartin > Github";

  const containerGithub = document.createElement("div");
  containerGithub.classList.add("containerGitHub");

  const calendar = document.createElement("img");
  calendar.setAttribute("src", imgPath.CALENDAR);

  try {
    const response = await fetch("/github/user");
    const dataUser = await response.json();
    console.log(dataUser.payload);
  } catch (error) {
    console.error(error);
  }

  containerGithub.appendChild(calendar);
  mainView.appendChild(containerGithub);
};

export { renderMainGithub };
