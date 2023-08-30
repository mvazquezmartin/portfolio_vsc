import { btnFocus } from "../../utils/btnFocus.js";
import { nextToLearnObj } from "./nextToLearnObj.js";
import { stacks } from "./stackObj.js";
import { stackRenderViewSideBar } from "./stackViewSideBar.js";

const renderStack = () => {
  const viewSideBar = document.getElementById("viewSideBar");
  viewSideBar.innerHTML = "";

  const titleSideBar = document.getElementById("titleSideBar");
  titleSideBar.textContent = "STACK";

  const fileOpen = document.getElementById("fileOpen");
  fileOpen.textContent = "INSTALLED";

  const stackRender = document.createElement("div");
  stackRender.setAttribute("id", "stackRender");
  stackRender.classList.add("stackRender");

  const recommendedContainer = document.createElement("div");
  recommendedContainer.classList.add("recommendedContainer");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("nextToLearnTitle");

  const btnHide = document.createElement("span");
  btnHide.classList.add("bi", "bi-chevron-down");
  btnHide.addEventListener("click", hiddenNextToLearn);

  const nextToLearnTitle = document.createElement("div");
  nextToLearnTitle.classList.add("nextToLearn");
  nextToLearnTitle.textContent = "NEXT TO LEARN";

  const nextToLearnContainer = document.createElement("div");
  nextToLearnContainer.classList.add("nextToLearnContainer");

  viewSideBar.appendChild(stackRender);
  viewSideBar.appendChild(recommendedContainer);
  recommendedContainer.appendChild(titleContainer);
  titleContainer.appendChild(btnHide);
  titleContainer.appendChild(nextToLearnTitle);
  recommendedContainer.appendChild(nextToLearnContainer);

  stackRenderViewSideBar(stacks, stackRender);
  stackRenderViewSideBar(nextToLearnObj, nextToLearnContainer);
  const btn = document.querySelectorAll(".stackFlex");
  btnFocus(btn, "activeFile");

  function hiddenNextToLearn() {
    recommendedContainer.classList.toggle("hiddenNTL");

    if (recommendedContainer.classList.contains("hiddenNTL")) {
      btnHide.classList.replace("bi-chevron-down", "bi-chevron-right");
    } else {
      btnHide.classList.replace("bi-chevron-right", "bi-chevron-down");
    }
  }
};

export { renderStack };
