import { tabsOpen } from "../tabs/tabsRender.js";
import { stacks } from "./stackObj.js";
import { stackView } from "./stackView.js";

// Render stack ViewSideBar
const stackRenderViewSideBar = (stacks) => {
  stacks.forEach((stack) => {
    //estructura MiNodo
    const miNodo = document.createElement("div");
    miNodo.classList.add("stackFlex");
    miNodo.setAttribute("id", stack.stackId);
    miNodo.dataset.tab = stack.stackId;
    miNodo.addEventListener("click", openStack);
    //imagen div container
    const miNodoDivImg = document.createElement("div");
    miNodoDivImg.classList.add("stackDivImg");
    //imagen stack
    const miNodoImgStack = document.createElement("img");
    miNodoImgStack.setAttribute("src", stack.stackImg);
    miNodoImgStack.setAttribute("alt", stack.stackTitle);
    //Titulo y Descripcion Stack
    const miNodoTitleDescription = document.createElement("div");
    miNodoTitleDescription.classList.add("stackDescriptionTitle");
    const miNodoTitulo = document.createElement("p");
    miNodoTitulo.classList.add("stackTitle");
    miNodoTitulo.textContent = stack.stackTitle;
    const miNodoDescription = document.createElement("p");
    miNodoDescription.classList.add("stackDescription");
    miNodoDescription.textContent = stack.stackDescription;

    //Insert nodo
    miNodo.appendChild(miNodoDivImg);
    miNodoDivImg.appendChild(miNodoImgStack);
    miNodo.appendChild(miNodoTitleDescription);
    miNodoTitleDescription.appendChild(miNodoTitulo);
    miNodoTitleDescription.appendChild(miNodoDescription);
    viewSideBar.appendChild(miNodo);
  });
};

const openStack = (evento) => {
  const id = evento.target.closest(".stackFlex").dataset.tab;
  const stack = stacks.find((e) => e.stackId === id);
  tabsOpen.push(stack.stackTitle)
  console.log(tabsOpen)  
  stackView(stack);
};

export { stackRenderViewSideBar };
