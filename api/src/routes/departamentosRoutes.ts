import { Router } from "express";
import { excluiDepartamento, insereDepartamento, listaDepartamentos } from "../controllers/departamentosControllers";

const router = Router();

router.get('/departamentos', listaDepartamentos);
router.post('/departamentos', insereDepartamento);
router.delete('/departamentos', excluiDepartamento);

export default router;