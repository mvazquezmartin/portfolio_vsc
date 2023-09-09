const { Router } = require("express");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");
const MessageService = require("../service/message.service");
const authenticateAPIKEY = require("../middlewares/authenticateAPI.middleware");
const path = require("path");

const router = Router();
const viewUrl = path.join(__dirname, "../public/pages/messages.html");

router.get("/view", async (req, res) => {
  try {
    res.sendFile(viewUrl);
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something gone wrong" });
  }
});

router.get("/", authenticateAPIKEY, async (req, res) => {
  try {
    const response = await MessageService.getAll();

    res.status(response.code).json({
      status: response.status,
      message: response.message,
      payload: response.payload,
    });
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something gone wrong" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message, date } = req.body;

    const newMessage = { name, email, subject, message, date };

    const response = await MessageService.create(newMessage);

    res.status(response.code).json({
      status: response.status,
      message: response.message,
      payload: response.payload,
    });
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something gone wrong" });
  }
});

module.exports = router;
