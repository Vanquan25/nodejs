import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/category";

const router = Router();


router.post("/category", create);
router.get("/category/:id", read);
router.get("/categories", list);
router.delete("/category/:id", remove);
router.put("/category/:id", update)
export default router;