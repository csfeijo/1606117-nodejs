import { Request, Response } from 'express';
import conexao from '../services/connection';

export const listaDepartamentos = async (req: Request, res: Response) => {
  // Executar uma query com o banco
  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
  res.json(rows);
}

// TODO:
// precisamos validar que a app nao quebre se os dados vierem repetidos
// precisamos validar que os dados estão sendo enviados (nome e sigla obrigatorios)
export const insereDepartamento = async (req: Request, res: Response) => {
  const { nome, sigla } = req.body;

  try {
    const [result] = await conexao.execute(
      'INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES (? , ?)',
      [sigla, nome]
    );

    res.status(201).json({
      message: 'Departamento criado'
    })
  } catch (e) {
    res.status(500).json({
      message: 'Erro na criação'
    })
  }
}
