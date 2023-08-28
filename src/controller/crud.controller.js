const { Router } = require("express");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");
const itemService = require("../service/item.service");

const router = Router();

// GET ALL ITEM
router.get("/", async (req, res) => {
  try {
    const { persistence } = req.query;

    itemService.getPersistence(persistence);

    const response = await itemService.getAll();

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

// GET ONE BY ID
router.get("/item/:id", async (req, res) => {
  try {
    const { persistence } = req.query;
    const { id } = req.params;

    itemService.getPersistence(persistence);

    const response = await itemService.getOneById(id);

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

// ADD NEW ITEM
router.post("/", async (req, res) => {
  try {
    const { title, description, category, image, price, stock } = req.body;
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something gone wrong" });
  }
});

// MODIFY EXISTING ITEM
router.patch("/:id", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something gone wrong" });
  }
});

// DELETE ITEM
router.delete("/:id", async (req, res) => {
  try {
    const { persistence } = req.query;
    const { id } = req.params;

    itemService.getPersistence(persistence);

    const response = await itemService.delete(id);

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

// RESTART STORAGE
router.get("/restart", async (req, res) => {
  try {
    const { persistence } = req.query;

    itemService.getPersistence(persistence);

    console.log("restart")

    const response = await itemService.restart();

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
