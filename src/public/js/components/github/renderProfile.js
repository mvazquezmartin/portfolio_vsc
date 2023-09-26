const renderProfile = (data, nodo) => {
  const containerHeader = document.createElement("div");
  containerHeader.classList.add("containerHeaderGithub");

  const containerAvatar = document.createElement("div");
  containerAvatar.classList.add("containerAvatar");
  const avatar = document.createElement("img");
  avatar.src = data.avatar_url;
  avatar.alt = data.login;

  const containerName = document.createElement("div");
  containerName.classList.add("containerName");
  const name = document.createElement("h1");
  name.textContent = data.login;

  const containerRepos = document.createElement("div");
  containerRepos.classList.add("containerRepos");
  const reposNum = document.createElement("p");
  reposNum.textContent = `${data.public_repos} repositories`;

  containerHeader.appendChild(containerAvatar);
  containerAvatar.appendChild(avatar);
  containerHeader.appendChild(containerName);
  containerName.appendChild(name);
  containerHeader.appendChild(containerRepos);
  containerRepos.appendChild(reposNum);
  nodo.appendChild(containerHeader);
};

export { renderProfile };
