import { Router } from "express";
import { 
  atualizaDepartamento,
  excluiDepartamento, 
  insereDepartamento, 
  listaDepartamentos,
  listaDepartamentoPeloId
} from "../controllers/departamentosControllers";
import validaDepartamento from "../middlewares/validaDepartamento";
const router = Router();

router.get('/departamentos', listaDepartamentos);
router.get('/departamentos/:id', listaDepartamentoPeloId)
router.post('/departamentos', validaDepartamento, insereDepartamento);
router.delete('/departamentos', excluiDepartamento);
router.put('/departamentos/:id', validaDepartamento, atualizaDepartamento);

// rota.metodo('/caminho', funcaodevalidacao, funcaoquefazoquetemquefazer)

export default router;