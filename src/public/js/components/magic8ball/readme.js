import { readmeCreate } from "../readme/readmeCreate.js";
import { readme } from "../readme/readmeTxt.js";

const readmeRender8Ball = () => {
  const ruta = "Portfolio > Magic8Bal > readme_m8b.md";
  readmeCreate(ruta, readme.magic8ball);
  hljs.highlightAll()
};

export { readmeRender8Ball };
