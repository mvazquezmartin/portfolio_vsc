const { Router } = require("express");
const { messages, users } = require("../config/socket.config");

const router = Router();

router.get("/", (req, res) => {
  res.json({ status: "success", messages: messages, users: users });
});

module.exports = router;
