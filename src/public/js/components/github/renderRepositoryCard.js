import { repositoriesImg } from "./repositoryImg.js";

const renderRepositoryCard = (data, nodo) => {
  const containerCard = document.createElement("div");
  containerCard.classList.add("repositoryCard");

  const containerImg = document.createElement("div");
  containerImg.classList.add("repositoryImg");

  const imgRepo = Object.keys(repositoriesImg).find((key) => key === data.name);
  const img = repositoriesImg[imgRepo];

  const repImg = document.createElement("img");
  repImg.src = img;

  const containerContent = document.createElement("div");
  containerContent.classList.add("repositoryContent");

  const link = document.createElement("a");
  link.href = data.html_url;
  link.target = "_blank";
  link.textContent = data.name;
  const title = document.createElement("h3");
  const description = document.createElement("p");
  description.textContent = data.description;

  containerCard.appendChild(containerImg);
  containerImg.appendChild(repImg);
  containerCard.appendChild(containerContent);
  containerContent.appendChild(title);
  title.appendChild(link);
  containerContent.appendChild(description);
  nodo.appendChild(containerCard);
};

export { renderRepositoryCard };
