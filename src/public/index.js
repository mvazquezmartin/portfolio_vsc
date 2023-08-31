import { iconPath } from "./js/assetsPath/assetsPath.js";
import { renderExplorer } from "./js/components/explorerSideBar/explorer.js";
import { renderMainText } from "./js/components/heroIndex/heroIndex.js";
import { renderStack } from "./js/components/stack/stack.js";
import { tabManager } from "./js/components/tabs/TabsManager.js";
import { setUpResponsiveEvents } from "./js/responsive/responsive.js";
import { btnFocus } from "./js/utils/btnFocus.js";
import { repositoriesRender } from "./js/components/github/repositoriesRender.js";

// QUERY DE ELEMENTOS
const explorer = document.getElementById("files");
const inicio = document.getElementById("inicio");
const stack = document.getElementById("stack");
const github = document.getElementById("github");
const btnNavBarAside = document.querySelectorAll(".iconNavBarAside");

// FUNCIONES

// EVENTLISTENERS
inicio.addEventListener("click", () =>
  tabManager.create("Get Started", renderMainText, iconPath.VSC)
);
explorer.addEventListener("click", renderExplorer);
stack.addEventListener("click", renderStack);
github.addEventListener("click", repositoriesRender);

// EJECUCION DE FUNCIONES
// MOBILE FUNCTION
setUpResponsiveEvents();
// FUNCTION
btnFocus(btnNavBarAside, "active");
tabManager.create("Get Started", renderMainText, iconPath.VSC);
renderExplorer();

// function handleClick(event) {
//   console.log('Clic realizado en:', event.target);
//   // Coloca aquí tu código de depuración específico
// }

// // Agregar un oyente de eventos de clic al documento
// document.addEventListener('click', handleClick);
