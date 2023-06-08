const svgGrid = "https://ghchart.rshah.org/409ba5/mvazquezmartin";

const gridGithubRender = async () => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";
  mainView.style.overflowY = "auto";
  mainArea.style.gridTemplateAreas = `
  "tabs tabs tabs"
  "rootPath rootPath rootPath"
  "mainView mainView mainView"
  `;

  const grid = document.createElement("img");
  grid.setAttribute("src", svgGrid);

  mainView.appendChild(grid);
};

export { gridGithubRender };
