import { Router } from "express";
import path from "path";

const router = Router();

router.get("/", (req, res) => {    
  const simplifiedPage = path.join(process.cwd(), "src/public/pages/simplifiedPage/index.html");    
  res.sendFile(simplifiedPage);
});

export default router;