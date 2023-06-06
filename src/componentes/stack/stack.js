import { btnFocus } from "../../navBarAsideFocus/btnFocus.js";
import { stacks } from "./stackObj.js";
import { stackRenderViewSideBar } from "./stackViewSideBar.js";

const renderStack = () => {
  const mainView = document.getElementById("mainView");
  mainView.style.overflowY = "auto";
  mainArea.style.gridTemplateAreas = `
  "tabs tabs tabs"
  "rootPath rootPath rootPath"
  "mainView mainView mainView"
  `;

  const viewSideBar = document.getElementById("viewSideBar");
  viewSideBar.style.overflowY = "auto";
  viewSideBar.innerHTML = "";

  const titleSideBar = document.getElementById("titleSideBar");
  titleSideBar.textContent = "STACK";

  const fileOpen = document.getElementById("fileOpen");
  fileOpen.textContent = "INSTALLED";

  stackRenderViewSideBar(stacks);
  const btn = document.querySelectorAll(".stackFlex");
  btnFocus(btn, "activeFile");
};

export { renderStack };
