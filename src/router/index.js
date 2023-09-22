const chatController = require("../controller/chat.controller");
const crudController = require("../controller/crud.controller");
const youtubeController = require("../controller/youtube.controller");
const contactController = require("../controller/message.controller");
const githubController = require("../controller/github.controller");

const router = (app) => {
  app.use("/chatlogs", chatController);
  app.use("/cruds", crudController);
  app.use("/getinfochannels", youtubeController);
  app.use("/messages", contactController);
  app.use("/github", githubController);
};

module.exports = router;
