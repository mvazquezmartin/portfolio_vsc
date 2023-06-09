import { renderExplorer } from "../src/componentes/explorerSideBar/explorer.js";
import { gridGithubRender } from "../src/componentes/github/gridRender.js";
import { renderMainText } from "../src/componentes/heroIndex/heroIndex.js";
import { renderStack } from "../src/componentes/stack/stack.js";
import { createTab } from "../src/componentes/tabs/tabsRender.js";
import { btnFocus } from "../src/utils/btnFocus.js";

// DECLARACIONES
const iconVsc = './assets/visual-studio-code-svgrepo-com.svg'

// QUERY DE ELEMENTOS
const explorer = document.getElementById("files");
const inicio = document.getElementById("inicio");
const stack = document.getElementById("stack");
const github = document.getElementById("github");
const btnNavBarAside = document.querySelectorAll(".iconNavBarAside");

// FUNCIONES

// EVENTLISTENERS
explorer.addEventListener("click", renderExplorer);
stack.addEventListener("click", renderStack);
inicio.addEventListener("click", ()=> createTab("Inicio",renderMainText, iconVsc));
github.addEventListener("click", gridGithubRender);
//inicio.addEventListener("click", ()=>{btnFocusRemove(btnNavBarAside)})

// EJECUCION DE FUNCIONES
btnFocus(btnNavBarAside);
createTab("Inicio", renderMainText, iconVsc);
renderExplorer();
