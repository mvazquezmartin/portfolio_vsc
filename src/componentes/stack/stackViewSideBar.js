import { btnFocus } from "../../navBarAsideFocus/btnFocus.js";
import { stacks } from "./stackObj.js";
import { stackView } from "./stackView.js";

// Render stack ViewSideBar
export const stackRenderViewSideBar = (stacks) => {
  stacks.forEach((stack) => {
    //estructura MiNodo
    const miNodo = document.createElement("div");
    miNodo.classList.add("stackFlex");
    miNodo.setAttribute("id", stack.stackId);
    miNodo.setAttribute("dataTab", stack.stackId);
    miNodo.addEventListener("click", newTab);
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


const newTab = (evento) => {
  const id = evento.target.closest(".stackFlex").getAttribute("dataTab");
  const stack = stacks.find((e) => e.stackId === id);
  stackView(stack);
};

