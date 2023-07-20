import { renderExplorer } from "./js/components/explorerSideBar/explorer.js";
import { gridGithubRender } from "./js/components/github/gridRender.js";
import { renderMainText } from "./js/components/heroIndex/heroIndex.js";
import { renderStack } from "./js/components/stack/stack.js";
import { createTab } from "./js/components/tabs/tabsRender.js";
import { btnFocus } from "./js/utils/btnFocus.js";

// DECLARACIONES
const iconVsc = "./assets/visual-studio-code-svgrepo-com.svg";

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
inicio.addEventListener("click", () =>
  createTab("Get Started", renderMainText, iconVsc)
);
github.addEventListener("click", gridGithubRender);
//inicio.addEventListener("click", ()=>{btnFocusRemove(btnNavBarAside)})

// EJECUCION DE FUNCIONES
btnFocus(btnNavBarAside);
createTab("Get Started", renderMainText, iconVsc);
renderExplorer();
