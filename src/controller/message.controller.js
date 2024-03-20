import { Router } from "express";
import HTTP_STATUS_CODES from "../constants/htpp-status-code.constants.js";
import MessageService from "../service/message.service.js";
import authenticateAPIKEY from "../middlewares/authenticateAPI.middleware.js";
import path from "path";

const router = Router();
const viewUrl = path.join(process.cwd(), "src/public/pages/messages.html");

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

export default router