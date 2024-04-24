import { readmeCreate } from '../readme/readmeCreate.js';
import { readme } from '../readme/readmeTxt.js';

const readmeRenderGTN = () => {
  const ruta = 'Portfolio > GuessTheNumber > readme_gtn.md';
  readmeCreate(ruta, readme.guessTheNumber);
  hljs.highlightAll();
};

export { readmeRenderGTN };
