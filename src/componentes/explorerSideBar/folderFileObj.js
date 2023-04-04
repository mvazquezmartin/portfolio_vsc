import { playGroundRender } from "../playground/playGround.js";
import { readmeRender } from "../playground/readme.js";

export const folder1 = {
  folderName: "Raíz1",
  files: ["Archivo1.txt", "Archivo2.txt"],
  subfolders: [
    {
      folderName: "Carpeta1",
      files: ["Archivo3.txt"],
      subfolders: [
        {
          folderName: "Subcarpeta1",
          files: ["Archivo4.txt", "Archivo5.txt"],
          subfolders: [],
        },
      ],
    },
    {
      folderName: "Carpeta2",
      files: ["Archivo6.txt", "Archivo7.txt"],
      subfolders: [{
        folderName:"Prueba",
        files: ["ArchivoPrueba"],
        subfolders: [],
      }],
    },
  ],
};

export const playGroundFolder = {
  folderName: "PlayGround",
  files: [{
    name:"playGround.js",
    icon: "./assets/javascript-icono-svgrepo-com.svg",
    function: playGroundRender
  },{
    name:"readme.txt",
    icon:"./assets/txt-svgrepo-com.svg",
    function: readmeRender
  }],
  subfolders: []
}