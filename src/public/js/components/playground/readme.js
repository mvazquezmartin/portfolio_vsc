import { readmeCreate } from "../readme/readmeCreate.js";
import { readme } from "../readme/readmeTxt.js";

const readmeRender = () => {
  const ruta = "Portfolio > PlayGround > readme_pg.md";
  readmeCreate(ruta, readme.playground);
};

export { readmeRender };
