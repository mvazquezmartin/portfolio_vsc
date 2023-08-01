const { Router } = require("express");
const path = require("path");

const router = Router();

router.get("/", (req, res) => {
  const indexRender = path.join(__dirname, "../public/index.html");
  res.sendFile(indexRender);
});

module.exports = router;
