const renderStarredCard = (data, nodo) => {
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
  title.textContent = data.name.toUpperCase();

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
  nodo.appendChild(repositoryCard);
};

export { renderStarredCard };
