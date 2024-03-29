import { tabManager } from "../tabs/TabsManager.js";
import { stackView } from "./stackView.js";

// Render stack ViewSideBar
const stackRenderViewSideBar = (stack, nodo) => {
  //estructura MiNodo
  const miNodo = document.createElement("div");
  miNodo.classList.add("stackFlex");
  miNodo.setAttribute("id", stack.id);
  miNodo.dataset.tab = stack.id;
  miNodo.addEventListener("click", openStack);
  //imagen div container
  const miNodoDivImg = document.createElement("picture");
  miNodoDivImg.classList.add("stackDivImg");
  //imagen stack
  const miNodoImgStack = document.createElement("img");
  miNodoImgStack.setAttribute("src", stack.image);
  miNodoImgStack.setAttribute("alt", stack.title);
  //Titulo y Descripcion Stack
  const miNodoTitleDescription = document.createElement("div");
  miNodoTitleDescription.classList.add("stackDescriptionTitle");
  const miNodoTitulo = document.createElement("p");
  miNodoTitulo.classList.add("stackTitle");
  miNodoTitulo.textContent = stack.title;
  const miNodoDescription = document.createElement("p");
  miNodoDescription.classList.add("stackDescription");
  miNodoDescription.textContent = stack.shortDescription;

  //Insert nodo
  miNodo.appendChild(miNodoDivImg);
  miNodoDivImg.appendChild(miNodoImgStack);
  miNodo.appendChild(miNodoTitleDescription);
  miNodoTitleDescription.appendChild(miNodoTitulo);
  miNodoTitleDescription.appendChild(miNodoDescription);
  nodo.appendChild(miNodo);

  function openStack() {
    const stackTarget = stack;
    tabManager.create(
      stackTarget.title,
      () => stackView(stackTarget),
      stackTarget.image
    );
  }
};

export { stackRenderViewSideBar };
