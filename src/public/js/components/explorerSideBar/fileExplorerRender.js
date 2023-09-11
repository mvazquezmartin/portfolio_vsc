import { highlight } from "../../utils/highlight.js";

const fileContext = {
  context: `  
  {
    "name": "vscode_portfolio",
    "version": "1.0.0",
    "description": "Portoflio con tematica VSCode, theme Dracula. Desarrolado en Html, Sass y JavaScript.",
    "main": "./src/index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node src/index.js",
      "start:local": "nodemon src/index.js"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/mvazquezmartin/portfolio_vsc.git"
    },
    "keywords": [],
    "author": "MVazquezMartin",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/mvazquezmartin/portfolio_vsc/issues"
    },
    "homepage": "https://github.com/mvazquezmartin/portfolio_vsc#readme",
    "dependencies": {
      "axios": "^1.5.0",
      "dotenv": "^16.3.1",
      "express": "^4.18.2",
      "mongodb": "^6.0.0",
      "mongoose": "^7.4.5",
      "multer": "^1.4.5-lts.1",
      "path": "^0.12.7",
      "socket.io": "^4.7.1",
      "uuid": "^9.0.0"
    },
    "devDependencies": {
      "colors": "^1.4.0"
    }
  }  
  `,
};

const renderJson = () => {
  const ruta = "Portfolio > package.json";
  highlight(ruta, fileContext.context, "json");
  hljs.highlightAll();
};
export { renderJson };
