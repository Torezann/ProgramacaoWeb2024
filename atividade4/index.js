const express = require('express');
const calc = require('./util/calculadora');
const app = express();

app.get('/', function (req, res) {
    res.send('página inicial');
});

app.get('/somar/:a/:b', function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.send(calc.somar(a, b).toString());
});

app.get('/subtrair/:a/:b', function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.send(calc.subtrair(a, b).toString());
});

app.get('/dividir/:a/:b', function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.send(calc.dividir(a, b).toString());
});

app.get('/multiplicar/:a/:b', function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.send(calc.multiplicar(a, b).toString());
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
});