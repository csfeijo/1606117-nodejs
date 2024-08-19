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
exports.insereDepartamento = exports.listaDepartamentos = void 0;
const connection_1 = __importDefault(require("../services/connection"));
const listaDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Executar uma query com o banco
    const [rows] = yield connection_1.default.query('SELECT * FROM DEPARTAMENTOS');
    res.json(rows);
});
exports.listaDepartamentos = listaDepartamentos;
// TODO:
// precisamos validar que a app nao quebre se os dados vierem repetidos
// precisamos validar que os dados estão sendo enviados (nome e sigla obrigatorios)
const insereDepartamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, sigla } = req.body;
    try {
        const [result] = yield connection_1.default.execute('INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES (? , ?)', [sigla, nome]);
        res.status(201).json({
            message: 'Departamento criado'
        });
    }
    catch (e) {
        res.status(500).json({
            message: 'Erro na criação'
        });
    }
});
exports.insereDepartamento = insereDepartamento;
//# sourceMappingURL=departamentosControllers.js.map