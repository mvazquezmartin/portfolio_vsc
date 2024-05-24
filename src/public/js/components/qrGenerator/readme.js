import { readmeCreate } from '../readme/readmeCreate.js';
import { readme } from '../readme/readmeTxt.js';

const readmeRenderQRG = () => {
  const ruta = 'Portfolio > QRgenerator > readme_qrg.md';
  readmeCreate(ruta, readme.qrGenerator);
  hljs.highlightAll();
};

export { readmeRenderQRG };
