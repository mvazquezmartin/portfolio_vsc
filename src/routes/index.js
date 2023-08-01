const express = require("express")
const chatController = require("../controller/chat.controller");
const indexController = require("../controller/index.controller");


const router = (app) => {
  app.use("/chatlog", chatController);
  app.use("/", express.static("src/public"));
};

module.exports = router;
