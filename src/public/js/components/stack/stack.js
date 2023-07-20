import { btnFocus } from "../../utils/btnFocus.js";
import { stacks } from "./stackObj.js";
import { stackRenderViewSideBar } from "./stackViewSideBar.js";

const renderStack = () => { 
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
