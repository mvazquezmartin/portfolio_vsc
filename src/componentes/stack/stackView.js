import { tabsRender } from "../tabs/tabsRender.js";

export const stackView = (stack) => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";
  mainView.style.overflowY = "auto";
  mainArea.style.gridTemplateAreas = `
  "tabs tabs tabs"
  "rootPath rootPath rootPath"
  "mainView mainView mainView"
  `;

  const rootPath = document.getElementById("rootPath");
  rootPath.style.display = "flex"
  rootPath.innerHTML = "";

  const stackArray = Array.isArray(stack) ? stack : [stack];
  stackArray.forEach((stack) => {
    //path
    rootPath.textContent = stack.stackPath;
    //estructura
    const miNodo = document.createElement("div");
    miNodo.classList.add("stackViewTabs");
    //stack title conteiner
    const miNodoStackTitle = document.createElement("div");
    miNodoStackTitle.classList.add("stackTitleView");
    const miNodoStackH2 = document.createElement("h2");
    miNodoStackH2.textContent = stack.stackTitle;
    //stack link certificado
    const miNodoLinkCertificado = document.createElement("a");
    miNodoLinkCertificado.classList.add("stackLinkCoder");
    miNodoLinkCertificado.setAttribute("href", stack.stackLinkCertificado);
    miNodoLinkCertificado.setAttribute("target", "_blank");
    miNodoLinkCertificado.textContent = "Link CoderHouse";
    //stack certificado
    const miNodoCertificadoDiv = document.createElement("div");
    miNodoCertificadoDiv.classList.add("stackCertificado");
    const miNodoCertificado = document.createElement("img");
    miNodoCertificado.setAttribute("src", stack.stackCertificado);
    miNodoCertificado.setAttribute("alt", stack.stackTitle);
    //insert Nodo
    miNodo.appendChild(miNodoStackTitle);
    miNodoStackTitle.appendChild(miNodoStackH2);
    miNodoStackTitle.appendChild(miNodoLinkCertificado);
    miNodo.appendChild(miNodoCertificadoDiv);
    miNodoCertificadoDiv.appendChild(miNodoCertificado);
    mainView.appendChild(miNodo);
    
    tabsRender(stack.stackTitle)
  });
};
