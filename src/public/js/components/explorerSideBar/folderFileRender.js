import { iconPath } from "../../assetsPath/assetsPath.js";
import { btnFocus } from "../../utils/btnFocus.js";

const renderFile = (file, funcion, icono) => {
  const miNodoTxtSpan = document.createElement("div");
  miNodoTxtSpan.classList.add("fileTxt");
  miNodoTxtSpan.addEventListener("click", file.function);
  const miNodoIcono = document.createElement("img");
  miNodoIcono.classList.add("iconoFile");
  miNodoIcono.setAttribute("src", file.icon);
  miNodoTxtSpan.appendChild(miNodoIcono);
  miNodoTxtSpan.appendChild(document.createTextNode(" " + file.name));
  return miNodoTxtSpan;
};

const folderFileSideBar = (folder, funcion, icono) => {
  const miNodo = document.createElement("div");

  if (folder.folderName) {
    // Si es una carpeta
    const miNodoButton = document.createElement("button");
    miNodoButton.classList.add("accordion");

    const iconFolder = document.createElement("img");
    iconFolder.setAttribute("src", iconPath.CLOSE_FOLDER);
    iconFolder.classList.add("iconFolder");

    miNodoButton.appendChild(iconFolder);
    miNodoButton.appendChild(document.createTextNode(" " + folder.folderName));
    miNodo.appendChild(miNodoButton);

    const miNodoSpan = document.createElement("div");
    miNodoSpan.classList.add("panel");
    miNodo.appendChild(miNodoSpan);

    // Renderizar subcarpetas primero
    folder.subfolders.forEach((subfolder) => {
      const subfolderNode = folderFileSideBar(subfolder, funcion, icono);
      miNodoSpan.appendChild(subfolderNode);
    });

    // Renderizar archivos después
    folder.files.forEach((file) => {
      const fileNode = renderFile(file, funcion, icono);
      miNodoSpan.appendChild(fileNode);
    });

    miNodoButton.addEventListener("click", () => {
      const panel = miNodoButton.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        iconFolder.setAttribute("src", iconPath.CLOSE_FOLDER);
      } else {
        panel.style.maxHeight = "500px";
        iconFolder.setAttribute("src", iconPath.OPEN_FOLDER);
      }
    });
  } else if (folder.name && folder.icon && folder.function) {
    // Si es un archivo individual
    const fileNode = renderFile(folder, funcion, icono);
    miNodo.appendChild(fileNode);
  }
  
  const btnFolder = miNodo.querySelectorAll(".accordion");
  const btnFile = miNodo.querySelectorAll(".fileTxt");
  btnFocus(btnFolder, "activeFile");
  btnFocus(btnFile, "activeFile");

  return miNodo;
};

export { folderFileSideBar };

// import { iconPath } from "../../assetsPath/assetsPath.js";
// import { btnFocus } from "../../utils/btnFocus.js";

// const folderFileSideBar = (folder, funcion, icono) => {
//   const miNodo = document.createElement("div");
//   const miNodoButton = document.createElement("button");
//   miNodoButton.classList.add("accordion");

//   const iconFolder = document.createElement("img");
//   iconFolder.setAttribute("src", iconPath.CLOSE_FOLDER);
//   iconFolder.classList.add("iconFolder");

//   miNodoButton.appendChild(iconFolder);
//   miNodoButton.appendChild(document.createTextNode(" " + folder.folderName));
//   miNodo.appendChild(miNodoButton);

//   const miNodoSpan = document.createElement("div");
//   miNodoSpan.classList.add("panel");
//   miNodo.appendChild(miNodoSpan);

//   // Renderizar subcarpetas primero
//   folder.subfolders.forEach((subfolder) => {
//     const subfolderNode = folderFileSideBar(subfolder, funcion, icono);
//     miNodoSpan.appendChild(subfolderNode);
//   });

//   // Renderizar archivos después
//   folder.files.forEach((file) => {
//     const miNodoTxtSpan = document.createElement("div");
//     miNodoTxtSpan.classList.add("fileTxt");
//     miNodoTxtSpan.addEventListener("click", file.function);
//     const miNodoIcono = document.createElement("img");
//     miNodoIcono.classList.add("iconoFile");
//     miNodoIcono.setAttribute("src", file.icon);
//     miNodoTxtSpan.appendChild(miNodoIcono);
//     miNodoTxtSpan.appendChild(document.createTextNode(" " + file.name));
//     miNodoSpan.appendChild(miNodoTxtSpan);
//   });

//   const btnFolder = miNodo.querySelectorAll(".accordion");
//   const btnFile = miNodo.querySelectorAll(".fileTxt");
//   btnFocus(btnFolder, "activeFile");
//   btnFocus(btnFile, "activeFile");

//   miNodoButton.addEventListener("click", () => {
//     const panel = miNodoButton.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//       iconFolder.setAttribute("src", iconPath.CLOSE_FOLDER);
//     } else {
//       panel.style.maxHeight = "300px";
//       iconFolder.setAttribute("src", iconPath.OPEN_FOLDER);
//     }
//   });

//   return miNodo;
// };

// export { folderFileSideBar };

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
