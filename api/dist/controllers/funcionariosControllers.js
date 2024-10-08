"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../services/connection"));
const listaFuncionariosDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Executar uma query com o banco
    const [rows] = yield connection_1.default.query(`
    SELECT 
      F.nome AS nome_funcionario,
      F.salario,
      F.genero,
      D.nome AS nome_departamento,
      D.sigla AS sigla_departamento
    FROM FUNCIONARIOS AS F
    INNER JOIN DEPARTAMENTOS AS D
    ON F.id_departamento = D.id_departamento
  `);
    res.json(rows);
});
exports.default = listaFuncionariosDepartamentos;
//# sourceMappingURL=funcionariosControllers.js.map