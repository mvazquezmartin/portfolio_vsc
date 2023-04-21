import { isRender } from "../../isRender.js";
import { btnFocus } from "../../navBarAsideFocus/btnFocus.js";
import { stacks } from "./stackObj.js";
import { stackRenderViewSideBar } from "./stackViewSideBar.js";

const renderStack = () => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";
  mainView.style.overflowY = "auto";
  mainArea.style.gridTemplateAreas = `
  "tabs tabs tabs"
  "rootPath rootPath rootPath"
  "mainView mainView mainView"
  `;

  const rootPath = document.getElementById("rootPath");
  rootPath.innerHTML = "";

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

  isRender.stack = true;
};

export { renderStack };
