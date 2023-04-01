import { renderExplorer } from "../src/componentes/explorerSideBar/explorer.js";
import { renderMainText } from "../src/componentes/heroIndex.js";
import { renderStack } from "../src/componentes/stack/stack.js";
import { isRender } from "../src/isRender.js";
import { btnFocus } from "../src/navBarAsideFocus/btnFocus.js";

// DECLARACIONES

// QUERY DE ELEMENTOS
const explorer = document.getElementById("files");
const inicio = document.getElementById("inicio");
const stack = document.getElementById("stack");
const btnNavBarAside = document.querySelectorAll(".iconNavBarAside");

// FUNCIONES

// EVENTLISTENERS
explorer.addEventListener("click", renderExplorer);
stack.addEventListener("click", ()=>{if(!isRender.stack) renderStack()});
inicio.addEventListener("click", renderMainText);
//inicio.addEventListener("click", ()=>{btnFocusRemove(btnNavBarAside)})

// EJECUCION DE FUNCIONES
renderExplorer()
renderMainText();
btnFocus(btnNavBarAside);
