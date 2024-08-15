import { Request, Response } from 'express';

export const listaDepartamentos = (req: Request, res: Response):void => {
  res.send('GET departamentos');
}

export const insereDepartamento = (req: Request, res: Response):void => {
  console.log(req.body);
  res.send('POST departamentos');
}
