import { Router } from "express";
import { insereDepartamento, listaDepartamentos } from "../controllers/departamentosControllers";

const router = Router();

router.get('/departamentos', listaDepartamentos);
router.post('/departamentos', insereDepartamento);

export default router;