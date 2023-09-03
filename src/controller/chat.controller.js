const { Router } = require("express");
const { messages, users } = require("../config/socket.config");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");

const router = Router();

router.get("/", (req, res) => {
  try {
    res.json({
      status: "success",
      messages: messages,
      users: users,
    });
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something gone wrong" });
  }
});

module.exports = router;
