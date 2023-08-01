const { Router } = require("express");
const path = require("path");

const router = Router();

router.get("/", (req, res) => {
  const indexRender = path.join(__dirname, "../public/index.html");
  console.log("index")  
  res.sendFile(indexRender);
});

module.exports = router;
