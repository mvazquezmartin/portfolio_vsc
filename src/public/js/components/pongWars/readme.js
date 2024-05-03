import { readmeCreate } from '../readme/readmeCreate.js';
import { readme } from '../readme/readmeTxt.js';

const readmeRenderPW = () => {
  const ruta = 'Portfolio > PongWars > readme_pw.md';
  readmeCreate(ruta, readme.pongWars);
  hljs.highlightAll();
};

export { readmeRenderPW };
