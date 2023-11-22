import { readmeCreate } from "../readme/readmeCreate.js";
import { readme } from "../readme/readmeTxt.js";

const readmeRenderChat = () => {
  const ruta = "Portfolio > SocketChat > readme_chat.md"
  readmeCreate(ruta, readme.socketIo);
};

export { readmeRenderChat };
