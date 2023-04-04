import { btnFocus } from "../../navBarAsideFocus/btnFocus.js";

const viewSideBar = document.getElementById("viewSideBar");

const folderClose = "./assets/folder-close.svg";
const folderOpen = "./assets/folder-open.svg";

export const folderFileSideBar = (folder, funcion, icono) => {
  const miNodo = document.createElement("div");
  const miNodoButton = document.createElement("button");
  miNodoButton.classList.add("accordion");
  const iconFolder = document.createElement("img");
  iconFolder.setAttribute("src", folderClose);
  iconFolder.classList.add("iconFolder");
  miNodoButton.appendChild(iconFolder);
  miNodoButton.appendChild(document.createTextNode(" " + folder.folderName));
  const miNodoSpan = document.createElement("div");
  miNodoSpan.classList.add("panel");

  miNodo.appendChild(miNodoButton);
  miNodo.appendChild(miNodoSpan);
  viewSideBar.appendChild(miNodo);

  folder.files.forEach((file) => {
    const miNodoTxtSpan = document.createElement("button");
    miNodoTxtSpan.classList.add("fileTxt");
    miNodoTxtSpan.addEventListener("click", file.function);
    const miNodoIcono = document.createElement("img");
    miNodoIcono.setAttribute("src", file.icon);
    miNodoTxtSpan.appendChild(miNodoIcono);
    miNodoTxtSpan.appendChild(document.createTextNode(" " + file.name));
    miNodoSpan.appendChild(miNodoTxtSpan);
  });

  folder.subfolders.forEach((subfolder) => {
    const subfolderNode = folderFileSideBar(subfolder, funcion, icono);
    miNodoSpan.appendChild(subfolderNode);
  });

  const btnFolder = miNodo.querySelectorAll(".accordion");
  const btnFile = miNodo.querySelectorAll(".fileTxt");
  btnFocus(btnFolder, "activeFile");
  btnFocus(btnFile, "activeFile");
  
  miNodoButton.addEventListener("click", () => {
    const panel = miNodoButton.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      iconFolder.setAttribute("src", folderClose);
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      iconFolder.setAttribute("src", folderOpen);
    }
  });
  
  return miNodo;
};

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_symbol //

/* export const folderFileSideBar = (
  folder,
  files,
  funcion,
  icono = iconoFile
) => {
  const miNodo = document.createElement("div");
  const miNodoButton = document.createElement("button");
  miNodoButton.classList.add("accordion");
  const iconFolder = document.createElement("img");
  iconFolder.setAttribute("src", folderClose);
  iconFolder.classList.add("iconFolder");
  miNodoButton.appendChild(iconFolder);
  miNodoButton.appendChild(document.createTextNode(" " + folder));
  const miNodoSpan = document.createElement("div");
  miNodoSpan.classList.add("panel");

  miNodo.appendChild(miNodoButton);
  miNodo.appendChild(miNodoSpan);
  viewSideBar.appendChild(miNodo);

  files.forEach((file) => {
    const miNodoTxtSpan = document.createElement("button");
    miNodoTxtSpan.classList.add("fileTxt");
    miNodoTxtSpan.addEventListener("click", funcion);
    const miNodoIcono = document.createElement("img");
    miNodoIcono.setAttribute("src", icono);
    miNodoTxtSpan.appendChild(miNodoIcono);
    miNodoTxtSpan.appendChild(document.createTextNode(" " + file));
    miNodoSpan.appendChild(miNodoTxtSpan);
  });

  const btnFolder = miNodo.querySelectorAll(".accordion");
  const btnFile = miNodo.querySelectorAll(".fileTxt");
  btnFocus(btnFolder, "activeFile");
  btnFocus(btnFile, "activeFile");

  miNodoButton.addEventListener("click", () => {
    const panel = miNodoButton.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      iconFolder.setAttribute("src", folderClose);
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      iconFolder.setAttribute("src", folderOpen);
    }
  });
}; */

