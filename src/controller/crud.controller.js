const { Router } = require("express");
const itemService = require("../service/item.service");

const router = Router();

// GET ALL ITEM
router.get("/", async (req, res) => {
  try {
    const { persistence } = req.query;

    const response = await itemService.getAll(persistence);

    res.json({
      status: response.status,
      message: response.message,
      payload: response.payload,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Something gone wrong" });
  }
});

// ADD NEW ITEM
router.post("/", async (req, res) => {
  try {
  } catch (error) {}
});

// MODIFY EXISTING ITEM
router.patch("/", async (req, res) => {
  try {
  } catch (error) {}
});

// DELETE ITEM
router.delete("/:id", async (req, res) => {
  try {
    const { persistence } = req.query;
    const { id } = req.params;

    const response = await itemService.deleteOne(persistence, id);
    
    res.json({
      status: response.status,
      message: response.message,
      payload: response.payload,
    })
  } catch (error) {
    res.status(500).json({ status: "error", message: "Something gone wrong" });
  }
});

// RESET STORAGE
router.get("/resets", async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = router;
