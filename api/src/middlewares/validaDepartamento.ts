import { Request, Response, NextFunction } from 'express';

export const validaDepartamento = (req: Request, res: Response, next: NextFunction): void => {
  const { nome, sigla } = req.body;

  if ((typeof nome !== 'string' || nome.trim() === '') || (typeof sigla !== 'string' || sigla.trim() === '')) {
    res.status(400).json({
      message: 'Campo inválido ou ausente'
    });
    return;
  }

  next();
}

// TODO: implemente um validador para os parametros vindos na atualização de um departamento
// MINIMO: clone a funcao acima e a adapte para tambem validar o ID
// DESAFIO: o ideal é que vc use o MESMO validaDepartamento da inserção, porém faça ele suportar também a validação do ID

export const validaAtualizacaoDepartamento = (req: Request, res: Response, next: NextFunction): void => {
  const { nome, sigla } = req.body;
  const { id } = req.params;

  if (isNaN(Number(id))) {
    res.status(400).json({
      message: 'Identificador deve ser numérico'
    });
    return;
  }


  if ((typeof nome !== 'string' || nome.trim() === '') || (typeof sigla !== 'string' || sigla.trim() === '')) {
    res.status(400).json({
      message: 'Campo inválido ou ausente'
    });
    return;
  }

  next();
}


//export default validaDepartamento;