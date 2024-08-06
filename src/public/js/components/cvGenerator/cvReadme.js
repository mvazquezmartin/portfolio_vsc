import { readmeCreate } from '../readme/readmeCreate.js';
import { readme } from '../readme/readmeTxt.js';

const readmeRenderCVG = () => {
  const ruta = 'Portfolio > CVGenerator > readme_cvg.md';
  readmeCreate(ruta, readme.cvGenerator);
  hljs.highlightAll();
};

export { readmeRenderCVG };
