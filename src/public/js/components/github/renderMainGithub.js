import { imgPath } from "../../assetsPath/assetsPath.js";
import { renderProfile } from "./renderProfile.js";
import { renderRepositoryCard } from "./renderRepositoryCard.js";
import { repositories } from "./repositoriesObj.js";

const cacheData = {};

const renderMainGithub = async () => {
  const containerMain = document.createElement("div");
  containerMain.classList.add("containerMainGithub");

  const path = document.getElementById("rootPath");
  path.textContent = "Github > @mvazquezartin";

  const containerGithub = document.createElement("div");
  containerGithub.classList.add("containerChartGithub");

  const containerRepositories = document.createElement("div");
  containerRepositories.classList.add("containerRepositories")

  const calendar = document.createElement("img");
  calendar.setAttribute("src", imgPath.CALENDAR);

  try {
    const response = await fetch("/github/user");
    const dataUser = await response.json();
    renderProfile(dataUser.payload, containerMain);
  } catch (error) {
    console.error(error);
  }

  const fetchRepo = repositories.map(async (repo) => {
    try {
      if (!cacheData[repo]) {
        const response = await fetch(`/github?repository=${repo}`);
        if (!response.ok) throw new Error("Algo salio mal");

        const data = await response.json();
        cacheData[repo] = data;
      }
      // console.log(cacheData[repo].payload);
      renderRepositoryCard(cacheData[repo].payload, containerRepositories);
    } catch (error) {
      console.error(error);
    }
  });

  await Promise.all(fetchRepo);

  containerMain.appendChild(containerRepositories);
  containerGithub.appendChild(calendar);
  containerMain.appendChild(containerGithub);
  mainView.appendChild(containerMain);
};

export { renderMainGithub };
