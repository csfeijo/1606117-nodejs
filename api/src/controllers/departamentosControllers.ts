import { Request, Response } from 'express';
import conexao from '../services/connection';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export const listaDepartamentos = async (req: Request, res: Response) => {
  // Executar uma query com o banco
  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
  res.json(rows);
}

export const listaDepartamentoPeloId = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Executar uma query com o banco
  const [rows] = await conexao.execute<RowDataPacket[]>('SELECT * FROM DEPARTAMENTOS WHERE id_departamento = ?', [id]);

  if (rows.length === 0) {
    res.status(404).json(rows);  
    return;
  }
  res.status(200).json(rows);
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
    console.log(e)
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

export const atualizaDepartamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, sigla } = req.body;

  try {
    const [result] = await conexao.execute<ResultSetHeader>('UPDATE DEPARTAMENTOS SET nome = ?, sigla = ? WHERE id_departamento = ?',
      [nome, sigla, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({
        message: 'Departamento não encontrado',
        id
      });
      return;
    } 

    res.json({
      message: 'Departamento atualizado'
    });
  } catch(e) {
    res.status(500).json({
      message: 'Erro ao atualizar o departamento'
    });
  }
}