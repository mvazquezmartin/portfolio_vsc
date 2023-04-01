import { btnFocus } from "../../navBarAsideFocus/btnFocus.js";

const viewSideBar = document.getElementById("viewSideBar");

const folderClose = "../../assets/folder-close.svg"
const folderOpen = "../../assets/folder-open.svg"

export const folderFileSideBar = (folder, files, funcion) => {
  const miNodo = document.createElement("div");  
  const miNodoButton = document.createElement("button");
  miNodoButton.classList.add("accordion");
  const iconFolder = document.createElement("img")
  iconFolder.setAttribute("src", folderClose)
  iconFolder.classList.add("iconFolder")
  miNodoButton.appendChild(iconFolder)
  miNodoButton.appendChild(document.createTextNode(' '+folder))
  const miNodoSpan = document.createElement("div");
  miNodoSpan.classList.add("panel");

  miNodo.appendChild(miNodoButton);
  miNodo.appendChild(miNodoSpan);
  viewSideBar.appendChild(miNodo);

  // Agrega un botón para cada archivo en el array de archivos
  files.forEach((file) => {
    const miNodoTxtSpan = document.createElement("button");
    miNodoTxtSpan.classList.add("fileTxt")
    miNodoTxtSpan.addEventListener("click",funcion)
    miNodoTxtSpan.textContent = file;
    miNodoSpan.appendChild(miNodoTxtSpan);
  });
  
  const btn = miNodo.querySelectorAll(".accordion")
  btnFocus(btn, "activeFile")
  
  miNodoButton.addEventListener("click", () => {
    const panel = miNodoButton.nextElementSibling;    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      iconFolder.setAttribute("src", folderClose)
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      iconFolder.setAttribute("src", folderOpen)
    }
  });
};

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_symbol //
