const { Router } = require("express");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");
const ItemService = require("../service/item.service");
const ItemDTO = require("../dto/item.dto");

const router = Router();

// RESTART STORAGE
router.get("/restart", async (req, res) => {
  try {
    const { persistence } = req.query;

    ItemService.setPersistence(persistence);

    const response = await ItemService.restart();

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

// GET ALL ITEM
router.get("/", async (req, res) => {
  try {
    const { persistence } = req.query;

    ItemService.setPersistence(persistence);

    const response = await ItemService.getAll();

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
router.get("/:id", async (req, res) => {
  try {
    const { persistence } = req.query;
    const { id } = req.params;

    ItemService.setPersistence(persistence);

    const response = await ItemService.getOneById(id);

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

// CREATE NEW ITEM
router.post("/", async (req, res) => {
  try {
    const { persistence } = req.query;
    const item = req.body;

    if (!item.image) item.image = "https://dummyimage.com/300x200/000/fff";

    ItemService.setPersistence(persistence);

    const newItem = new ItemDTO(item);
    const response = await ItemService.create(newItem);

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

// MODIFY EXISTING ITEM
router.patch("/:id", async (req, res) => {
  try {
    const { persistence } = req.query;
    const { id } = req.params;
    const itemUpdate = req.body;

    ItemService.setPersistence(persistence);

    const update = new ItemDTO(itemUpdate);

    const response = await ItemService.update(id, update);

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

// DELETE ITEM
router.delete("/:id", async (req, res) => {
  try {
    const { persistence } = req.query;
    const { id } = req.params;

    ItemService.setPersistence(persistence);

    const response = await ItemService.delete(id);

    res.status(response.code).json({
      title: response.title,
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

// DELETE ALL
router.delete("/", async (req, res) => {
  try {
    const { persistence } = req.query;

    ItemService.setPersistence(persistence);

    const response = await ItemService.deleteAll();

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
