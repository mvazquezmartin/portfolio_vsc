import chatController from "../controller/chat.controller.js";
import crudController from "../controller/crud.controller.js";
import youtubeController from "../controller/youtube.controller.js";
import contactController from "../controller/message.controller.js";
import githubController from "../controller/github.controller.js";
import indexController from "../controller/index.controller.js";

const router = (app) => {
  app.use("/", indexController);
  app.use("/chatlogs", chatController);
  app.use("/cruds", crudController);
  app.use("/getinfochannels", youtubeController);
  app.use("/messages", contactController);
  app.use("/github", githubController);
};

export default router;
