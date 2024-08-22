import { Router } from "express";
import { 
  atualizaDepartamento,
  excluiDepartamento, 
  insereDepartamento, 
  listaDepartamentos 
} from "../controllers/departamentosControllers";
import validaDepartamento from "../middlewares/validaDepartamento";
const router = Router();

router.get('/departamentos', listaDepartamentos);
router.post('/departamentos', validaDepartamento, insereDepartamento);
router.delete('/departamentos', excluiDepartamento);
router.put('/departamentos/:id', validaDepartamento, atualizaDepartamento);


// rota.metodo('/caminho', funcaodevalidacao, funcaoquefazoquetemquefazer)

export default router;