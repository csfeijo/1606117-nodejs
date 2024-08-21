"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validaDepartamento = (req, res, next) => {
    const { nome, sigla } = req.body;
    if ((typeof nome !== 'string' || nome.trim() === '') || (typeof sigla !== 'string' || sigla.trim() === '')) {
        res.status(400).json({
            message: 'Campo inválido ou ausente'
        });
        return;
    }
    next();
};
// TODO: implemente um validador para os parametros vindos na atualização de um departamento
// MINIMO: clone a funcao acima e a adapte para tambem validar o ID
// DESAFIO: o ideal é que vc use o MESMO validaDepartamento da inserção, porém faça ele suportar também a validação do ID
exports.default = validaDepartamento;
//# sourceMappingURL=validaDepartamento.js.map