/* Vídeo de referência: https://www.youtube.com/watch?v=CjQMi8mv2Do */

// const http = require('http'); /* precisa da dependencia para funcionar */

// const hostname = '127.0.0.1'; /* esse não entendi */
// const port = 3000;

// /* criando o servidor */
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Olá mundo!');
// });

// /* porta de entrada que diz para executar o servidor */
// server.listen(port,hostname, () => {
//     console.log("Servidor rodando!");
// })

// /* express - um fremwork que vai facilitar a criação de rotas do site*/
/* Sistema de rota do express */
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router(); /* para definir rotas */


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname +'/index.html')); /* path - função para pegar os diretórios // __dirname - constante para apontar onde está o arquivo*/
})

router.get('/sobre', function(req, res) {
    res.sendFile(path.join(__dirname +'/sobre.html')); /* path - função para pegar os diretórios // __dirname - constante para apontar onde está o arquivo*/
})

app.use('/', router);
app.listen(process.env.port || 3000); /* liga o servidor */

console.log("Servidor rodando3!");
