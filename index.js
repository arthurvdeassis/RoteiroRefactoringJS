const { readFileSync } = require('fs');
const Repositorio = require('./repositorio.js');
const ServicoCalculoFatura = require('./servico.js');
const gerarFaturaStr = require('./apresentacao.js');

// main
const faturas = JSON.parse(readFileSync('./faturas.json'));
const repo = new Repositorio();
const calc = new ServicoCalculoFatura(repo);

const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);
