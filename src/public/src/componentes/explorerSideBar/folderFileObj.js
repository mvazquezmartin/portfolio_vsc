import { ilyudo } from "../assets/1Lyud0.js";
import { chatRender } from "../chat/chatRender.js";
import { magic8BallRender } from "../magic8ball/magic8ball.js";
import { readmeRender8Ball } from "../magic8ball/readme.js";
import { playGroundRender } from "../playground/playGround.js";
import { readmeRender } from "../playground/readme.js";
import { createTab } from "../tabs/tabsRender.js";

const jsIcon = "./assets/javascript-icono-svgrepo-com.svg";
const jpgIcon = "./assets/jpg-svgrepo-com.svg";
const txtIcon = "./assets/txt-svgrepo-com.svg";
const m8bIcon = "./assets/pool-8-ball-svgrepo-com.svg";
const chatIcon = "./assets/chat-svgrepo-com.svg";

const judoJpg = "./assets/judo.jpg";
const setUpJpg = "./assets/setup.jpg";
const chessMeme = "./assets/meme01.jpg";
const dependeMeme = "./assets/meme02.jpg";

const assetsFolder = {
  folderName: "Assets",
  files: [
    {
      name: "chess_meme.jpg",
      icon: jpgIcon,
      function: () =>
        createTab(
          "chess_meme.jpg",
          () => ilyudo(chessMeme, "chess_meme"),
          jpgIcon
        ),
    },
    {
      name: "loroArquitecto.jpg",
      icon: jpgIcon,
      function: () =>
        createTab(
          "loroArquitecto.jpg",
          () => ilyudo(dependeMeme, "loroArquitecto"),
          jpgIcon
        ),
    },
    {
      name: "judo.jpg",
      icon: jpgIcon,
      function: () =>
        createTab("judo.jpg", () => ilyudo(judoJpg, "judo"), jpgIcon),
    },
    {
      name: "setUp.jpg",
      icon: jpgIcon,
      function: () =>
        createTab("setUp.jpg", () => ilyudo(setUpJpg, "setUp"), jpgIcon),
    },
  ],
  subfolders: [],
};

const playGroundFolder = {
  folderName: "PlayGround",
  files: [
    {
      name: "playGround.js",
      icon: jsIcon,
      function: () => createTab("playGround.js", playGroundRender, jsIcon),
    },
    {
      name: "readme_pg.txt",
      icon: txtIcon,
      function: () => createTab("readme_pg.txt", readmeRender, txtIcon),
    },
  ],
  subfolders: [],
};

const magic8Ball = {
  folderName: "Magic8Ball",
  files: [
    {
      name: "magic8Ball.js",
      icon: jsIcon,
      function: () => createTab("magic8Ball.js", magic8BallRender, m8bIcon),
    },
    {
      name: "readme_m8b.txt",
      icon: txtIcon,
      function: () => createTab("readme_m8b.txt", readmeRender8Ball, txtIcon),
    },
  ],
  subfolders: [],
};

const chat = {
  folderName: "SocketChat",
  files: [
    {
      name: "socketChat-1.0v.js",
      icon: jsIcon,
      function: () => {
        createTab("SocketChat", chatRender, chatIcon);
      },
    },
    {
      name: "readme_chat.txt",
      icon: "./assets/txt-svgrepo-com.svg",
      function: () =>
        createTab(
          "readme_m8b.txt",
          readmeRender8Ball,
          "./assets/txt-svgrepo-com.svg"
        ),
    },
  ],
  subfolders: [],
};

const folder1 = {
  folderName: "Inventario",
  files: [
    // {
    //   name: "Archivo1.txt",
    //   icon: "./assets/code-file-svgrepo-com.svg",
    //   function: () => console.log("archivo1"),
    // },
    // {
    //   name: "Archivo2.txt",
    //   icon: "./assets/code-file-svgrepo-com.svg",
    //   function: () => console.log("archivo1"),
    // },
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
        {
          name: "Archivo1.txt",
          icon: "./assets/code-file-svgrepo-com.svg",
          function: () => console.log("archivo1"),
        },
        {
          name: "Archivo2.txt",
          icon: "./assets/code-file-svgrepo-com.svg",
          function: () => console.log("archivo2"),
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
              function: () => console.log("archivo4"),
            },
          ],
          subfolders: [],
        },
      ],
    },
  ],
};

export { assetsFolder, playGroundFolder, folder1, magic8Ball, chat };
