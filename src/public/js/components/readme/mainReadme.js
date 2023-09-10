import { readmeCreate } from "./readmeCreate.js";
import { readme } from "./readmeTxt.js";

const readmeMain = () => {
  const ruta = "Portfolio > README.md";
  readmeCreate(ruta, readme.README);
};

export { readmeMain };
