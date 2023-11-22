import { readmeCreate } from "../readme/readmeCreate.js";
import { readme } from "../readme/readmeTxt.js";

const readmeRenderCRUD = () => {
  const ruta = "Portfolio > CRUD > readme_crud.md";
  readmeCreate(ruta, readme.CRUD);
};

export { readmeRenderCRUD };
