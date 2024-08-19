import { Request, Response } from 'express';
import conexao from '../services/connection';
import { ResultSetHeader } from 'mysql2';

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

export const excluiDepartamento = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {

    const [result] = await conexao.execute<ResultSetHeader>(
      'DELETE FROM DEPARTAMENTOS WHERE id_departamento = ?',
      [id]
    );

    if (result.affectedRows === 0) {

      res.status(404).json({
        message: 'Departamento não encontrado',
        id
      })
      return;

    } else {
      
      res.json({
        message: 'Departamento excluído',
        id
      })
      return;

    }

  } catch (e) {
    let message = '';

    switch (e.code) {
      case 'ER_ROW_IS_REFERENCED_2':
        message = 'Departamento possui vinculos e não pode ser excluído.';
      break;
      default:
        message = 'Erro na exclusão do departamento.';
      break;
    }

    res.status(500).json({
      message
    })
  }
}
