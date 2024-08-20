import { Router } from "express";
import { excluiDepartamento, insereDepartamento, listaDepartamentos } from "../controllers/departamentosControllers";
import validaDepartamento from "../middlewares/validaDepartamento";
const router = Router();

router.get('/departamentos', listaDepartamentos);
router.post('/departamentos', validaDepartamento, insereDepartamento);
router.delete('/departamentos', excluiDepartamento);




// rota.metodo('/caminho', funcaodevalidacao, funcaoquefazoquetemquefazer)

export default router;