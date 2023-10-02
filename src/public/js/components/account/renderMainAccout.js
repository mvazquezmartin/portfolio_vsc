const renderAccount = () => {
  const path = document.getElementById("rootPath");
  path.textContent = "Account > Main Account";

  const containerAccount = document.createElement("div");
  containerAccount.classList.add("containerAccount");
  containerAccount.textContent = "About Me";

  mainView.appendChild(containerAccount);
};

export { renderAccount };
