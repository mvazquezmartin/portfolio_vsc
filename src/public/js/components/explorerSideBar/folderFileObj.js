import { tabManager } from "../tabs/TabsManager.js";
import { iconPath, imgPath } from "../../assetsPath/assetsPath.js";
import { ilyudo } from "../assets/1Lyud0.js";
import { chatRender } from "../chat/chatRender.js";
import { readmeRenderChat } from "../chat/readmeChat.js";
import { magic8BallRender } from "../magic8ball/magic8ball.js";
import { readmeRender8Ball } from "../magic8ball/readme.js";
import { playGroundRender } from "../playground/playGround.js";
import { readmeRender } from "../playground/readme.js";
import {
  renderDotenv,
  renderGitignore,
  renderJson,
} from "./fileExplorerRender.js";
import { readmeMain } from "../readme/mainReadme.js";
import { renderMainCrud } from "../crud/renderMainCrud.js";

const assetsFolder = {
  folderName: "Assets",
  files: [
    {
      name: "chess_meme.jpg",
      icon: iconPath.JPG,
      function: () =>
        tabManager.create(
          "chess_meme.jpg",
          () => ilyudo(imgPath.CHESS_MEME, "chess_meme"),
          iconPath.JPG
        ),
    },
    {
      name: "loroArquitecto.jpg",
      icon: iconPath.JPG,
      function: () =>
        tabManager.create(
          "loroArquitecto.jpg",
          () => ilyudo(imgPath.DEPENDE_MEME, "loroArquitecto"),
          iconPath.JPG
        ),
    },
    {
      name: "pro_googling.jpg",
      icon: iconPath.JPG,
      function: () =>
        tabManager.create(
          "pro_googling.jpg",
          () => ilyudo(imgPath.PRO_GOOGLING, "pro googling"),
          iconPath.JPG
        ),
    },
    {
      name: "judo.jpg",
      icon: iconPath.JPG,
      function: () =>
        tabManager.create(
          "judo.jpg",
          () => ilyudo(imgPath.JUDO, "judo"),
          iconPath.JPG
        ),
    },
    {
      name: "setUp.jpg",
      icon: iconPath.JPG,
      function: () =>
        tabManager.create(
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
        tabManager.create(
          "playGround.js",
          playGroundRender,
          iconPath.PLAYGROUND
        ),
    },
    {
      name: "readme_pg.md",
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create("readme_pg.md", readmeRender, iconPath.MARKDOWN),
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
        tabManager.create("magic8Ball.js", magic8BallRender, iconPath.M8B),
    },
    {
      name: "readme_m8b.md",
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create(
          "readme_m8b.md",
          readmeRender8Ball,
          iconPath.MARKDOWN
        ),
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
      function: () =>
        tabManager.create("SocketChat.js", chatRender, iconPath.CHAT),
    },
    {
      name: "readme_chat.md",
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create(
          "readme_chat.md",
          readmeRenderChat,
          iconPath.MARKDOWN
        ),
    },
  ],
  subfolders: [],
};

const readme = {
  name: "README.md",
  icon: iconPath.MARKDOWN,
  function: () => tabManager.create("README.md", readmeMain, iconPath.MARKDOWN),
};

const dotenv = {
  name: ".env",
  icon: iconPath.DOTENV,
  function: () => tabManager.create(".env", renderDotenv, iconPath.DOTENV),
  className: "gitignore",
};

const packageJson = {
  name: "package.json",
  icon: iconPath.NODEJS,
  function: () =>
    tabManager.create("package.json", renderJson, iconPath.NODEJS),
};

const gitIgnore = {
  name: ".gitignore",
  icon: iconPath.GIT,
  function: () =>
    tabManager.create(".gitignore", renderGitignore, iconPath.GIT),
};

const folder1 = {
  folderName: "CRUD",
  files: [
    {
      name: "readme_crud.md",
      icon: iconPath.MARKDOWN,
      function: () => console.log("README!"),
    },
  ],
  subfolders: [
    {
      folderName: "CRUD v1.0",
      files: [
        {
          name: "CRUD MongoDB.js",
          icon: iconPath.CODE,
          function: () => {
            tabManager.create(
              "CRUD MongoDB",
              () => renderMainCrud("mongodb"),
              iconPath.CODE
            );
          },
        },
      ],
      subfolders: [],
    },
    {
      folderName: "CRUD v0.6",
      files: [
        {
          name: "CRUD Filesystem.js",
          icon: iconPath.CODE,
          function: () => {
            tabManager.create(
              "CRUD Filesystem",
              () => renderMainCrud("filesystem"),
              iconPath.CODE
            );
          },
        },
      ],
      subfolders: [],
    },
    {
      folderName: "Inventario v0.2",
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

export {
  assetsFolder,
  playGroundFolder,
  folder1,
  magic8Ball,
  chat,
  readme,
  packageJson,
  gitIgnore,
  dotenv,
};
