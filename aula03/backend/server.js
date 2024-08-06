import http from 'http';

const server = http.createServer((req, res) => {
  
  let n1 = 10;
  let n2 = 5;
  let result = n1 + n2

  res.setHeader('Content-Type', 'text/html');

  if(result % 2 === 0){
    res.end(`Numero ${result} eh par.`);
  }else{
    res.end(`Numero ${result} eh <span style="color:red">impar</span>.`);
  }
});

server.listen(3000, 'localhost');