import { Router } from "express";
import path from "path";

const router = Router();

router.get("/", (req, res) => {  
  const indexRender = path.join(process.cwd(), "src/public/index.html");    
  res.sendFile(indexRender);
});

export default router;
