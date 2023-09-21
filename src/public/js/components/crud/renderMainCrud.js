import { RenderComponentsCrud } from "./RenderComponents.js";

async function renderMainCrud(persistence) {
  const path = document.getElementById("rootPath");
  path.textContent = `Portfolio > CRUD > CRUD ${persistence}`;

  const containerCRUDMain = document.createElement("div");
  containerCRUDMain.classList.add("containerCRUDMain");

  const containerTitle = document.createElement("div");
  containerTitle.classList.add("containerTitle");

  const titleCrud = document.createElement("h1");
  titleCrud.textContent = `CRUD ${persistence}`;

  const containerCRUD = document.createElement("div");
  containerCRUD.classList.add("containerCRUD");

  const containerCRUDBtns = document.createElement("div");
  containerCRUDBtns.classList.add("containerCRUDBtns");

  const containerBtns = document.createElement("div");
  containerBtns.classList.add("containerBtns");
  containerBtns.setAttribute("id", "containerBtns");

  const containerRenderBtns = document.createElement("div");
  containerRenderBtns.classList.add("containerRenderBtns");
  containerRenderBtns.setAttribute("id", "renderBtns");

  const containerItems = document.createElement("div");
  containerItems.classList.add("containerItems");
  containerItems.setAttribute("id", "containerItems");

  containerCRUDMain.appendChild(containerTitle);
  containerTitle.appendChild(titleCrud);
  containerCRUDMain.appendChild(containerCRUD);
  containerCRUD.appendChild(containerCRUDBtns);
  containerCRUDBtns.appendChild(containerBtns);
  containerCRUDBtns.appendChild(containerRenderBtns);
  containerCRUD.appendChild(containerItems);
  mainView.appendChild(containerCRUDMain);

  const renderComponents = new RenderComponentsCrud(persistence);

  renderComponents.btnCrud("Search");
  renderComponents.btnCrud("Create");
  renderComponents.btnCrud("Modify");
  renderComponents.btnCrud("Delete");
  renderComponents.btnCrud("Reset");

  await renderComponents.getAll();
}

export { renderMainCrud };
