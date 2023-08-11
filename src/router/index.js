const chatController = require("../controller/chat.controller");
const crudController = require("../controller/crud.controller");

const router = (app) => {
  app.use("/chatlog", chatController);
  app.use("/crud", crudController);
};

module.exports = router;
