import { iconPath } from "./js/assetsPath/assetsPath.js";
import { renderExplorer } from "./js/components/explorerSideBar/explorer.js";
import { githubMainRender } from "./js/components/github/gridRender.js";
import { renderMainText } from "./js/components/heroIndex/heroIndex.js";
import { renderStack } from "./js/components/stack/stack.js";
import { tabManager } from "./js/components/tabs/TabsManager.js";
import { mobileResponsive } from "./js/responsive/mobile/mobile.js";
import { btnFocus } from "./js/utils/btnFocus.js";

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
  tabManager.create("Get Started", renderMainText, iconPath.VSC)
);
github.addEventListener("click", () =>
  tabManager.create("Github", githubMainRender, iconPath.GITHUB)
);

window.addEventListener("load", mobileResponsive);
window.addEventListener("resize", mobileResponsive);

// EJECUCION DE FUNCIONES

btnFocus(btnNavBarAside);
tabManager.create("Get Started", renderMainText, iconPath.VSC);
renderExplorer();
