import express, { Request, Response } from 'express';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));
const porta = 3030;

app.get('/', (req: Request, res: Response):void => {
  res.send('API em NodeJS com TS');
});

app.get('/ping', (req: Request, res: Response):void => {
  res.send('Pong 🏓');
})

app.get('/soma', (req: Request, res: Response): void => {
  const {num1, num2, num3} = req.query as { num1: string; num2: string; num3: string };
  const soma = parseInt(num1, 10) + parseInt(num2, 10) + parseInt(num3, 10);

  res.send(`${soma}`);
});

app.get('/departamentos/:id', (req: Request, res: Response):void => {
  
  console.log(req.params);
  
  res.send('Pong 🏓');
});


app.get('/clientes', (req: Request, res: Response):void => {
  
  const html: string = '<link href="css/estilo.css" rel="stylesheet"><h1>Clientes</h1>';

  res.send(html);  
});



app.get('/funcionarios',  (req: Request, res: Response):void => {
  const funcionario = [{
    nome: "Cicero",
    salario: "2000.25",
    idade: 43
  }];

  res.contentType('application/json');
  res.send(funcionario);  
});

app.post('/departamentos',  (req: Request, res: Response):void => {

  console.log(req.body);

  res.send('POST departamentos');
});



app.listen(porta, () => {
  console.log(`Servidor escutando na porta http://localhost:${porta}`);
})
