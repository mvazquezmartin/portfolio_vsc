import { readmeCreate } from '../readme/readmeCreate.js';
import { readme } from '../readme/readmeTxt.js';

const readmeRenderGTC = () => {
  const ruta = 'Portfolio > GuessTheColor > readme_gtc.md';
  readmeCreate(ruta, readme.guessTheColor);
  hljs.highlightAll();
};

export { readmeRenderGTC };
