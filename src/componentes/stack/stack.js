import { isRender } from "../../isRender.js";
import { btnFocus } from "../../navBarAsideFocus/btnFocus.js";
//import { newTab } from "../renderTab.js";
import { stacks } from "./stackObj.js";
import { stackRenderViewSideBar } from "./stackViewSideBar.js";

export const renderStack = () => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";

  const sideBar = document.getElementById("sideBar");
  sideBar.style.gridTemplateAreas = `
    "titleSideBar titleSideBar titleSideBar"
    "fileOpen fileOpen fileOpen"
    "viewSideBar viewSideBar viewSideBar";  
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

  isRender.stack = true;
};
