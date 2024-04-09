const express = require('express');
const vnp = require('./util/verificar_numero_primo');
const app = express();

app.get('/', function (req, res) {
    res.send('página inicial');
});

app.get('/ola', function (req, res) {
    res.send('Olá, Mundo!');
});

app.get('/ola/:nome', function (req, res) {
    let n = req.params.nome;
    res.send('Olá, Mundo!, Olá ' + n);
});

app.get('/verificar-numero-primo/:n', function (req, res) {
    let n = req.params.n;
    res.send(vnp.verificarNumeroPrimo(n));
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
});
