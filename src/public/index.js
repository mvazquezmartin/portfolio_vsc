import { iconPath } from "./js/assetsPath/assetsPath.js";
import { renderExplorer } from "./js/components/explorerSideBar/explorer.js";
import { renderMainText } from "./js/components/heroIndex/heroIndex.js";
import { renderStack } from "./js/components/stack/stack.js";
import { tabManager } from "./js/components/tabs/TabsManager.js";
import { setUpResponsiveEvents } from "./js/responsive/responsive.js";
import { btnFocus } from "./js/utils/btnFocus.js";
import { renderGithub } from "./js/components/github/renderGithub.js";
import { renderBookmarks } from "./js/components/bookmarks/renderBookmarks.js";
import { renderMainContact } from "./js/components/contact/renderMainContact.js";
import { readmeMain } from "./js/components/readme/mainReadme.js";
import { renderAccount } from "./js/components/account/renderMainAccout.js";

// QUERY DE ELEMENTOS
const explorer = document.getElementById("files");
const inicio = document.getElementById("inicio");
const stack = document.getElementById("stack");
const bookmarks = document.getElementById("bookmarks");
const readme = document.getElementById("readme");
const github = document.getElementById("github");
const contact = document.getElementById("contact");
const account = document.getElementById("account");
const btnNavBarAside = document.querySelectorAll(".icon-navbar");

// FUNCIONES

// EVENTLISTENERS
explorer.addEventListener("click", renderExplorer);
stack.addEventListener("click", renderStack);
bookmarks.addEventListener("click", renderBookmarks);
github.addEventListener("click", renderGithub);
account.addEventListener("click", () =>
  tabManager.create("Account", renderAccount, iconPath.ACCOUNT)
);
contact.addEventListener("click", () =>
  tabManager.create("Contact", renderMainContact, iconPath.CONTACT)
);
readme.addEventListener("click", () =>
  tabManager.create("README.md", readmeMain, iconPath.MARKDOWN)
);
inicio.addEventListener("click", () =>
  tabManager.create("Welcome", renderMainText, iconPath.VSC, true)
);

// EJECUCION DE FUNCIONES
setUpResponsiveEvents(); // MOBILE FUNCTION
btnFocus(btnNavBarAside, "active");
tabManager.create("Welcome", renderMainText, iconPath.VSC, true);
renderExplorer();

// function handleClick(event) {
//   console.log('Clic realizado en:', event.target);
//   // Coloca aquí tu código de depuración específico
// }
//
// document.addEventListener('click', handleClick);
