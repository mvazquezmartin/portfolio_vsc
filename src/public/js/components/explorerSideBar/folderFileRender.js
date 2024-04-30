import { iconPath } from "../../assetsPath/assetsPath.js";
import { btnFocus } from "../../utils/btnFocus.js";

const renderFile = (file, funcion, icono, className = "sidebarFile") => {
  const miNodoTxtSpan = document.createElement("div");
  miNodoTxtSpan.classList.add("file", className);
  miNodoTxtSpan.addEventListener("click", file.function);
  const miNodoIcono = document.createElement("img");
  miNodoIcono.classList.add("iconoFile");
  miNodoIcono.setAttribute("src", file.icon);
  miNodoTxtSpan.appendChild(miNodoIcono);
  miNodoTxtSpan.appendChild(document.createTextNode(" " + file.name));
  return miNodoTxtSpan;
};

const folderFileSideBar = (folder) => {
  const miNodo = document.createElement("div");

  if (folder.folderName) {
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
      const subfolderNode = folderFileSideBar(subfolder);
      miNodoSpan.appendChild(subfolderNode);
    });

    // Renderizar archivos después
    folder.files.forEach((file) => {
      const fileNode = renderFile(
        file,
        folder.funcion,
        folder.icono,
        folder.className
      );
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
  } else if (
    (folder.name && folder.icon && folder.function) ||
    folder.className
  ) {
    // Si es un archivo individual
    const fileNode = renderFile(
      folder,
      folder.funcion,
      folder.icono,
      folder.className
    );
    miNodo.appendChild(fileNode);
  }

  const btnFolder = miNodo.querySelectorAll(".accordion");
  const btnFile = miNodo.querySelectorAll(".file");
  btnFocus(btnFolder, "activeFile");
  btnFocus(btnFile, "activeFile");

  return miNodo;
};

export { folderFileSideBar };