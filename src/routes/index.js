const express = require("express")
const chatController = require("../controller/chat.controller");

const router = (app) => {
  app.use("/chatlog", chatController);  
};

module.exports = router;
