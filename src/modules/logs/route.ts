import { Router } from "express";
import { getLogs } from "./controller";
const router = Router();

router.get('/', getLogs)

export default router
