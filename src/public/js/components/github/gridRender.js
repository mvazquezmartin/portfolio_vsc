const svgGrid = "https://ghchart.rshah.org/409ba5/mvazquezmartin";

const gridGithubRender = async () => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";

  const grid = document.createElement("img");
  grid.setAttribute("src", svgGrid);

  mainView.appendChild(grid);
};

export { gridGithubRender };
