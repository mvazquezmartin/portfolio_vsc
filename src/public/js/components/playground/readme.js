import { readmeCreate } from "../readme/readmeCreate.js";
import { readme } from "../readme/readmeTxt.js";

const readmeRender = () => {
  const ruta = "Portfolio > PlayGround > readme_pg.txt";
  readmeCreate(ruta, readme.playground);
};

export { readmeRender };
