import { RenderComponentsCrud } from "./renderComponents.js";
import { RequestCRUD } from "./requestCRUD.js";

const renderMainCrud = async (persistence, version) => {
  const requestCrud = new RequestCRUD(persistence);
  const renderComponents = new RenderComponentsCrud();

  const path = document.getElementById("rootPath");
  path.textContent = `Portfolio > CRUD > Inventario ${version}`;

  const containerCRUD = document.createElement("div");
  containerCRUD.classList.add("containerCRUD");

  const containerBtns = document.createElement("div");
  containerBtns.classList.add("containerBtns");

  const containerItems = document.createElement("div");
  containerItems.classList.add("containerItems");

  const response = await requestCrud.getAll();
  console.log(response);
  response.payload.forEach((item) => {
    renderComponents.containerItem(item, containerItems);
  });

  containerCRUD.appendChild(containerBtns);
  containerCRUD.appendChild(containerItems);
  mainView.appendChild(containerCRUD);
};

export { renderMainCrud };
