import { readmeCreate } from '../readme/readmeCreate.js';
import { readme } from '../readme/readmeTxt.js';

const readmeRenderFM = () => {
  const ruta = 'Portfolio > FollowMe > readme_fm.md';
  readmeCreate(ruta, readme.followMe);
  hljs.highlightAll();
};

export { readmeRenderFM };
