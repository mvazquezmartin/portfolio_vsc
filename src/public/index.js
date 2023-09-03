import { iconPath } from "./js/assetsPath/assetsPath.js";
import { renderExplorer } from "./js/components/explorerSideBar/explorer.js";
import { renderMainText } from "./js/components/heroIndex/heroIndex.js";
import { renderStack } from "./js/components/stack/stack.js";
import { tabManager } from "./js/components/tabs/TabsManager.js";
import { setUpResponsiveEvents } from "./js/responsive/responsive.js";
import { btnFocus } from "./js/utils/btnFocus.js";
import { renderRepositories } from "./js/components/github/renderRepositories.js";
import { renderBookmarks } from "./js/components/bookmarks/renderBookmarks.js";

// QUERY DE ELEMENTOS
const explorer = document.getElementById("files");
const inicio = document.getElementById("inicio");
const stack = document.getElementById("stack");
const bookmarks = document.getElementById("bookmarks");
const github = document.getElementById("github");
const btnNavBarAside = document.querySelectorAll(".iconNavBarAside");

// FUNCIONES

// EVENTLISTENERS
explorer.addEventListener("click", renderExplorer);
stack.addEventListener("click", renderStack);
bookmarks.addEventListener("click", renderBookmarks);
github.addEventListener("click", renderRepositories);
inicio.addEventListener("click", () =>
  tabManager.create("Get Started", renderMainText, iconPath.VSC)
);

// EJECUCION DE FUNCIONES
setUpResponsiveEvents(); // MOBILE FUNCTION
btnFocus(btnNavBarAside, "active");
tabManager.create("Get Started", renderMainText, iconPath.VSC);
renderExplorer();

// function handleClick(event) {
//   console.log('Clic realizado en:', event.target);
//   // Coloca aquí tu código de depuración específico
// }

// // Agregar un oyente de eventos de clic al documento
// document.addEventListener('click', handleClick);
