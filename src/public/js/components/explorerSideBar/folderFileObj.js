import { iconPath, imgPath } from "../../assetsPath/assetsPath.js";
import { ilyudo } from "../assets/1Lyud0.js";
import { chatRender } from "../chat/chatRender.js";
import { readmeRenderChat } from "../chat/readmeChat.js";
import { magic8BallRender } from "../magic8ball/magic8ball.js";
import { readmeRender8Ball } from "../magic8ball/readme.js";
import { playGroundRender } from "../playground/playGround.js";
import { readmeRender } from "../playground/readme.js";
import { createTab } from "../tabs/tabsRender.js";

const assetsFolder = {
  folderName: "Assets",
  files: [
    {
      name: "chess_meme.jpg",
      icon: iconPath.JPG,
      function: () =>
        createTab(
          "chess_meme.jpg",
          () => ilyudo(imgPath.CHESS_MEME, "chess_meme"),
          iconPath.JPG
        ),
    },
    {
      name: "loroArquitecto.jpg",
      icon: iconPath.JPG,
      function: () =>
        createTab(
          "loroArquitecto.jpg",
          () => ilyudo(imgPath.DEPENDE_MEME, "loroArquitecto"),
          iconPath.JPG
        ),
    },
    {
      name: "judo.jpg",
      icon: iconPath.JPG,
      function: () =>
        createTab("judo.jpg", () => ilyudo(imgPath.JUDO, "judo"), iconPath.JPG),
    },
    {
      name: "setUp.jpg",
      icon: iconPath.JPG,
      function: () =>
        createTab(
          "setUp.jpg",
          () => ilyudo(imgPath.SETUP, "setUp"),
          iconPath.JPG
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
      icon: iconPath.JAVASCRIPT,
      function: () =>
        createTab("playGround.js", playGroundRender, iconPath.PLAYGROUND),
    },
    {
      name: "readme_pg.txt",
      icon: iconPath.TXT,
      function: () => createTab("readme_pg.txt", readmeRender, iconPath.TXT),
    },
  ],
  subfolders: [],
};

const magic8Ball = {
  folderName: "Magic8Ball",
  files: [
    {
      name: "magic8Ball.js",
      icon: iconPath.JAVASCRIPT,
      function: () =>
        createTab("magic8Ball.js", magic8BallRender, iconPath.M8B),
    },
    {
      name: "readme_m8b.txt",
      icon: iconPath.TXT,
      function: () =>
        createTab("readme_m8b.txt", readmeRender8Ball, iconPath.TXT),
    },
  ],
  subfolders: [],
};

const chat = {
  folderName: "SocketChat",
  files: [
    {
      name: "socketChat-1.0v.js",
      icon: iconPath.JAVASCRIPT,
      function: () => {
        createTab("SocketChat", chatRender, iconPath.CHAT);
      },
    },
    {
      name: "readme_chat.txt",
      icon: iconPath.TXT,
      function: () =>
        createTab("readme_chattxt", readmeRenderChat, iconPath.TXT),
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
