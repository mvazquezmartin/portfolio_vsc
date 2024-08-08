import { tabManager } from '../tabs/TabsManager.js';
import { iconPath, imgPath } from '../../assetsPath/assetsPath.js';
import { ilyudo } from '../assets/1Lyud0.js';
import { chatRender } from '../chat/chatRender.js';
import { readmeRenderChat } from '../chat/readmeChat.js';
import { magic8BallRender } from '../magic8ball/magic8ball.js';
import { readmeRender8Ball } from '../magic8ball/readme.js';
import { playGroundRender } from '../playground/playGround.js';
import { readmeRender } from '../playground/readme.js';
import {
  renderDotenv,
  renderGitignore,
  renderJson,
} from './fileExplorerRender.js';
import { readmeMain } from '../readme/mainReadme.js';
import { renderMainCrud } from '../crud/renderMainCrud.js';
import { readmeRenderCRUD } from '../crud/readmeCRUD.js';
import { pongWarsRender } from '../pongWars/pongWars.js';
import { guessTheColorRender } from '../guessTheColor/guessTheColorRender.js';
import { followMeRender } from '../followMe/followMeRender.js';
import { readmeRenderFM } from '../followMe/readmeRender.js';
import { readmeRenderGTC } from '../guessTheColor/readme.js';
import { guessTheNumberRender } from '../guessTheNumber/guessTheNumberRender.js';
import { readmeRenderGTN } from '../guessTheNumber/readme.js';
import { readmeRenderPW } from '../pongWars/readme.js';
import { qrGeneratorRender } from '../qrGenerator/qrGeneratorRender.js';
import { readmeRenderQRG } from '../qrGenerator/readme.js';
import { cvGeneratorRender } from '../cvGenerator/cvGenerator.js';
import { readmeRenderCVG } from '../cvGenerator/cvReadme.js';

const assetsFolder = {
  folderName: 'Assets',
  files: [
    {
      name: 'documentation.jpg',
      icon: iconPath.JPG,
      function: () =>
        tabManager.create(
          'documentation.jpg',
          () => ilyudo(imgPath.DOCUMENTATION_MEME, 'documentation'),
          iconPath.JPG
        ),
    },
    {
      name: 'loro_arquitecto.jpg',
      icon: iconPath.JPG,
      function: () =>
        tabManager.create(
          'loro_arquitecto.jpg',
          () => ilyudo(imgPath.DEPENDE_MEME, 'loro_arquitecto'),
          iconPath.JPG
        ),
    },
    {
      name: 'googling.jpg',
      icon: iconPath.JPG,
      function: () =>
        tabManager.create(
          'googling.jpg',
          () => ilyudo(imgPath.PRO_GOOGLING, 'pro_googling'),
          iconPath.JPG
        ),
    },
    {
      name: 'judo.jpg',
      icon: iconPath.JPG,
      function: () =>
        tabManager.create(
          'judo.jpg',
          () => ilyudo(imgPath.JUDO, 'judo'),
          iconPath.JPG
        ),
    },
    {
      name: 'setup.jpg',
      icon: iconPath.JPG,
      function: () =>
        tabManager.create(
          'setup.jpg',
          () => ilyudo(imgPath.SETUP, 'setup'),
          iconPath.JPG
        ),
    },
  ],
  subfolders: [],
};

const playGroundFolder = {
  folderName: 'PlayGround',
  files: [
    {
      name: 'playGround.js',
      icon: iconPath.JAVASCRIPT,
      function: () =>
        tabManager.create(
          'playGround.js',
          playGroundRender,
          iconPath.PLAYGROUND
        ),
    },
    {
      name: 'readme_pg.md',
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create('readme_pg.md', readmeRender, iconPath.MARKDOWN),
    },
  ],
  subfolders: [],
};

const pongWarsFolder = {
  folderName: 'PongWars',
  files: [
    {
      name: 'pongWars.js',
      icon: iconPath.JAVASCRIPT,
      function: () =>
        tabManager.create('pongWars.js', pongWarsRender, iconPath.PONGWARS),
    },
    {
      name: 'readme_pw.md',
      icon: iconPath.MARKDOWN,
      function: () => {
        tabManager.create('readme_pw', readmeRenderPW, iconPath.MARKDOWN);
      },
    },
  ],
  subfolders: [],
};

const guessTheColor = {
  folderName: 'GuessTheColor',
  files: [
    {
      name: 'guessTheColor.js',
      icon: iconPath.JAVASCRIPT,
      function: () =>
        tabManager.create(
          'guessTheColor.js',
          guessTheColorRender,
          iconPath.GUESSTHECOLOR
        ),
    },
    {
      name: 'readme_gtc.md',
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create('readme_gtc.md', readmeRenderGTC, iconPath.MARKDOWN),
    },
  ],
  subfolders: [],
};

const guessTheNumber = {
  folderName: 'GuessTheNumber',
  files: [
    {
      name: 'guessTheNumber.js',
      icon: iconPath.JAVASCRIPT,
      function: () =>
        tabManager.create(
          'guessTheNumber.js',
          guessTheNumberRender,
          iconPath.GUESSTHENUMBER
        ),
    },
    {
      name: 'readme_gtn.md',
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create('readme_gtn.md', readmeRenderGTN, iconPath.MARKDOWN),
    },
  ],
  subfolders: [],
};

const followMe = {
  folderName: 'FollowMe',
  files: [
    {
      name: 'followMe.js',
      icon: iconPath.JAVASCRIPT,
      function: () =>
        tabManager.create('followMe.js', followMeRender, iconPath.FOLLOWME),
    },
    {
      name: 'readme_fm.md',
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create('readme_fm.md', readmeRenderFM, iconPath.MARKDOWN),
    },
  ],
  subfolders: [],
};

const qrGenerator = {
  folderName: 'QRgenerator',
  files: [
    {
      name: 'QRgenerator.js',
      icon: iconPath.JAVASCRIPT,
      function: () =>
        tabManager.create(
          'QRgenerator.js',
          qrGeneratorRender,
          iconPath.QRGENERATOR
        ),
    },
    {
      name: 'readme_qrg.md',
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create('readme_qrg.md', readmeRenderQRG, iconPath.MARKDOWN),
    },
  ],
  subfolders: [],
};

const cvGenerator = {
  folderName: 'CVGenerator',
  files: [
    {
      name: 'CVGenerator.jsx',
      icon: iconPath.REACTJS,
      function: () =>
        tabManager.create(
          'CVGenerator.jsx',
          cvGeneratorRender,
          iconPath.CVGENERATOR
        ),
    },
    {
      name: 'readme_cvg.md',
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create('readme.cvg.md', readmeRenderCVG, iconPath.MARKDOWN),
    },
  ],
  subfolders: [],
};

const magic8Ball = {
  folderName: 'Magic8Ball',
  files: [
    {
      name: 'magic8Ball.js',
      icon: iconPath.JAVASCRIPT,
      function: () =>
        tabManager.create('magic8Ball.js', magic8BallRender, iconPath.M8B),
    },
    {
      name: 'readme_m8b.md',
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create(
          'readme_m8b.md',
          readmeRender8Ball,
          iconPath.MARKDOWN
        ),
    },
  ],
  subfolders: [],
};

const chat = {
  folderName: 'SocketChat',
  files: [
    {
      name: 'socketChat-1.0v.js',
      icon: iconPath.JAVASCRIPT,
      function: () =>
        tabManager.create('SocketChat.js', chatRender, iconPath.CHAT),
    },
    {
      name: 'readme_chat.md',
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create(
          'readme_chat.md',
          readmeRenderChat,
          iconPath.MARKDOWN
        ),
    },
  ],
  subfolders: [],
};

const readme = {
  name: 'README.md',
  icon: iconPath.MARKDOWN,
  function: () => tabManager.create('README.md', readmeMain, iconPath.MARKDOWN),
};

const dotenv = {
  name: '.env',
  icon: iconPath.DOTENV,
  function: () => tabManager.create('.env', renderDotenv, iconPath.DOTENV),
  className: 'gitignore',
};

const packageJson = {
  name: 'package.json',
  icon: iconPath.NODEJS,
  function: () =>
    tabManager.create('package.json', renderJson, iconPath.NODEJS),
};

const gitIgnore = {
  name: '.gitignore',
  icon: iconPath.GIT,
  function: () =>
    tabManager.create('.gitignore', renderGitignore, iconPath.GIT),
};

const crud = {
  folderName: 'CRUD',
  files: [
    {
      name: 'readme_crud.md',
      icon: iconPath.MARKDOWN,
      function: () =>
        tabManager.create(
          'readme_crud.md',
          readmeRenderCRUD,
          iconPath.MARKDOWN
        ),
    },
  ],
  subfolders: [
    {
      folderName: 'CRUD v1.0',
      files: [
        {
          name: 'CRUD MongoDB.js',
          icon: iconPath.CODE,
          function: () => {
            tabManager.create(
              'CRUD MongoDB',
              () => renderMainCrud('mongodb'),
              iconPath.CODE
            );
          },
        },
      ],
      subfolders: [],
    },
    {
      folderName: 'CRUD v0.6',
      files: [
        {
          name: 'CRUD Filesystem.js',
          icon: iconPath.CODE,
          function: () => {
            tabManager.create(
              'CRUD Filesystem',
              () => renderMainCrud('filesystem'),
              iconPath.CODE
            );
          },
        },
      ],
      subfolders: [],
    },
  ],
};

export const folders = [
  assetsFolder,
  cvGenerator,
  followMe,
  guessTheColor,
  guessTheNumber,
  magic8Ball,
  pongWarsFolder,
  playGroundFolder,
  qrGenerator,
  chat,
  crud,
  dotenv,
  gitIgnore,
  packageJson,
  readme,
];
