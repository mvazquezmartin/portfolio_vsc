import { ilyudo } from "../assets/1Lyud0.js";
import { playGroundRender } from "../playground/playGround.js";
import { readmeRender } from "../playground/readme.js";

const judoJpg = "./assets/judo.jpg";
const setUpJpg = "./assets/setup.jpg";

export const assetsFolder = {
  folderName: "Assets",
  files: [
    {
      name: "judo.jpg",
      icon: "./assets/jpg-svgrepo-com.svg",
      function: () => ilyudo(judoJpg, "judo"),
    },
    {
      name: "setUp.jpg",
      icon: "./assets/jpg-svgrepo-com.svg",
      function: () => ilyudo(setUpJpg, "setUp"),
    },
  ],
  subfolders: [],
};

export const playGroundFolder = {
  folderName: "PlayGround",
  files: [
    {
      name: "playGround.js",
      icon: "./assets/javascript-icono-svgrepo-com.svg",
      function: playGroundRender,
    },
    {
      name: "readme.txt",
      icon: "./assets/txt-svgrepo-com.svg",
      function: readmeRender,
    },
  ],
  subfolders: [],
};

export const readmeFile = {
  files: [
    {
      name: "readme.txt",
      icon: "./assets/txt-svgrepo-com.svg",
      function: ()=> console.log("readme.txt"),
    },
  ],
  subfolders: [],
};

export const folder1 = {
  folderName: "Raíz1",
  files: [
    {
      name: "Archivo1.txt",
      icon: "./assets/code-file-svgrepo-com.svg",
      function:()=> console.log("archivo1"),
    },
    {
      name: "Archivo2.txt",
      icon: "./assets/code-file-svgrepo-com.svg",
      function:()=> console.log("archivo1"),
    },
  ],
  subfolders: [
    {
      folderName: "NASHEE",
      files: [
        {
          name: "archivo.nshe",
          icon: "./assets/code-file-svgrepo-com.svg",
          function: ()=> console.log("archivonasheee"),
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
          function: ()=> console.log("archivo3"),
        },
      ],
      subfolders: [
        {
          folderName: "Subcarpeta1",
          files: [
            {
              name: "Archivo4.txt",
              icon: "./assets/code-file-svgrepo-com.svg",
              function: ()=> console.log("archivo1"),
            },
          ],
          subfolders: [],
        },
      ],
    },
  ],
};
