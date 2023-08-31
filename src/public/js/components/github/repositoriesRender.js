const repositoriesRender = (repositories, nodo) => {
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

        const avatarAndTitle = document.createElement("div");
        avatarAndTitle.classList.add("avatarAndTitle");

        const profilePicture = document.createElement("img");
        profilePicture.setAttribute("src", data.owner.avatar_url);

        const dataRepo = document.createElement("div");
        dataRepo.classList.add("dataRepo");

        const titleContainer = document.createElement("span");

        const title = document.createElement("a");
        title.setAttribute("href", data.html_url);
        title.setAttribute("target", "_blank");
        title.textContent = data.name;

        const language = document.createElement("p");
        language.textContent = data.language;

        const created = document.createElement("span");
        created.classList.add("createdBy");
        created.textContent = "Created by ";

        const createdLink = document.createElement("a");
        createdLink.setAttribute("href", data.owner.html_url);
        createdLink.setAttribute("target", "_blank");
        createdLink.textContent = data.owner.login;

        const contentContainer = document.createElement("div");
        contentContainer.classList.add("contentContainer");
        const content = document.createElement("p");
        content.textContent = data.description;

        avatarAndTitle.appendChild(profilePicture);
        titleContainer.appendChild(title);
        dataRepo.appendChild(titleContainer);
        dataRepo.appendChild(language);
        created.appendChild(createdLink);
        dataRepo.appendChild(created);
        avatarAndTitle.appendChild(dataRepo);
        repositoryCard.appendChild(avatarAndTitle);
        contentContainer.appendChild(content);
        repositoryCard.appendChild(contentContainer);
        nodo.appendChild(repositoryCard);
      });
  });
};

export { repositoriesRender };
