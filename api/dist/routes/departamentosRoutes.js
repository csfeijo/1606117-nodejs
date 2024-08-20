"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentosControllers_1 = require("../controllers/departamentosControllers");
const router = (0, express_1.Router)();
router.get('/departamentos', departamentosControllers_1.listaDepartamentos);
router.post('/departamentos', departamentosControllers_1.insereDepartamento);
router.delete('/departamentos', departamentosControllers_1.excluiDepartamento);
exports.default = router;
//# sourceMappingURL=departamentosRoutes.js.map