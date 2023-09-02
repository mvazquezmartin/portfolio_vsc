const chatController = require("../controller/chat.controller");
const crudController = require("../controller/crud.controller");
const youtubeController = require("../controller/youtube.controller");

const router = (app) => {
  app.use("/chatlog", chatController);
  app.use("/crud", crudController);
  app.use("/getinfochannel", youtubeController);
};

module.exports = router;
