import { Router } from "express";
import path from "path";
import __dirname from "../utils/dirname.util.js";

const router = Router();

router.get("/", (req, res) => {
  const indexRender = path.join(__dirname, "/public/index.html");    
  res.sendFile(indexRender);
});

export default router;
