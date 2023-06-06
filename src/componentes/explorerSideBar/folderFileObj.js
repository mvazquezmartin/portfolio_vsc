import { ilyudo } from "../assets/1Lyud0.js";
import { playGroundRender } from "../playground/playGround.js";
import { readmeRender } from "../playground/readme.js";
import { createTab } from "../tabs/tabsRender.js";

const judoJpg = "./assets/judo.jpg";
const setUpJpg = "./assets/setup.jpg";
const chessMeme = "./assets/meme01.jpg";
const dependeMeme = "./assets/meme02.jpg";

const assetsFolder = {
  folderName: "Assets",
  files: [
    {
      name: "chess_meme.jpg",
      icon: "./assets/jpg-svgrepo-com.svg",
      function: () =>
        createTab(
          "chess_meme.jpg",
          () => ilyudo(chessMeme, "chess_meme"),
          "./assets/jpg-svgrepo-com.svg"
        ),
    },
    {
      name: "loroArquitecto.jpg",
      icon: "./assets/jpg-svgrepo-com.svg",
      function: () =>
        createTab(
          "loroArquitecto.jpg",
          () => ilyudo(dependeMeme, "loroArquitecto"),
          "./assets/jpg-svgrepo-com.svg"
        ),
    },
    {
      name: "judo.jpg",
      icon: "./assets/jpg-svgrepo-com.svg",
      function: () =>
        createTab(
          "judo.jpg",
          () => ilyudo(judoJpg, "judo"),
          "./assets/jpg-svgrepo-com.svg"
        ),
    },
    {
      name: "setUp.jpg",
      icon: "./assets/jpg-svgrepo-com.svg",
      function: () =>
        createTab(
          "setUp.jpg",
          () => ilyudo(setUpJpg, "setUp"),
          "./assets/jpg-svgrepo-com.svg"
        ),
    },
  ],
  subfolders: [],
};

const playGroundFolder = {
  folderName: "PlayGround",
  files: [
    {
      name: "playGround.js",
      icon: "./assets/javascript-icono-svgrepo-com.svg",
      function: () =>
        createTab(
          "playGround.js",
          playGroundRender,
          "./assets/javascript-icono-svgrepo-com.svg"
        ),
    },
    {
      name: "readme.txt",
      icon: "./assets/txt-svgrepo-com.svg",
      function: () =>
        createTab("readme.txt", readmeRender, "./assets/txt-svgrepo-com.svg"),
    },
  ],
  subfolders: [],
};

const readmeFile = {
  files: [
    {
      name: "readme.txt",
      icon: "./assets/txt-svgrepo-com.svg",
      function: () => console.log("readme.txt"),
    },
  ],
  subfolders: [],
};

const folder1 = {
  folderName: "Raíz1",
  files: [
    {
      name: "Archivo1.txt",
      icon: "./assets/code-file-svgrepo-com.svg",
      function: () => console.log("archivo1"),
    },
    {
      name: "Archivo2.txt",
      icon: "./assets/code-file-svgrepo-com.svg",
      function: () => console.log("archivo1"),
    },
  ],
  subfolders: [
    {
      folderName: "Carpeta0",
      files: [
        {
          name: "archivo.nshe",
          icon: "./assets/code-file-svgrepo-com.svg",
          function: () => console.log("archivonasheee"),
        },
      ],
      subfolders: [],
    },
    {
      folderName: "Carpeta1",
      files: [
        {
          name: "Archivo3.txt",
          icon: "./assets/code-file-svgrepo-com.svg",
          function: () => console.log("archivo3"),
        },
      ],
      subfolders: [
        {
          folderName: "Subcarpeta1",
          files: [
            {
              name: "Archivo4.txt",
              icon: "./assets/code-file-svgrepo-com.svg",
              function: () => console.log("archivo1"),
            },
          ],
          subfolders: [],
        },
      ],
    },
  ],
};

export { assetsFolder, playGroundFolder, readmeFile, folder1 };
