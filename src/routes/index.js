const chatController = require("../controller/chat.controller");
const indexController = require("../controller/index.controller");

const router = (app) => {
  app.use("/chatlog", chatController);
  app.use("/", indexController);
};

module.exports = router;
