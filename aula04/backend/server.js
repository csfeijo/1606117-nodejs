import http from 'http';


const PORTA = 3000;
const SERVER = 'localhost';

const server = http.createServer((req, res) => {
  
  console.log(req.method)

  // Este codigo exemplifica como renderizar o formulario como uma rota da aplicacao
  // como se este tivesse contido/fazendo parte deste servico
  // if(req.url === '/form') {
  //   res.setHeader('Content-Type', 'text/html');
  //   const form = '<form action="http://localhost:3000/cadastro" method="post">' + 
  //    '<input type="text" name="cidade" placeholder="Cidade">' +
  //    '<button type="submit">ENVIAR</button></form>';
  //   res.end(form);
  //   return; 
  // }

  if(req.url === '/clientes') {
    res.end("Página de clientes");
    return; 
  }

  if(req.url === '/contato') {
    res.end("Página de contato");  
    return;
  }

  if(req.url === '/cadastro' && req.method === 'POST') {
    res.end("Cadastro efetuado com sucesso!");  
    return;
  }

  res.end("Rodando...........");
});

server.listen(PORTA, SERVER, () => {
  console.log(`Servidor operando em: ${SERVER}:${PORTA}`);
});