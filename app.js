// Importa o arquivo da calculadora
const calculadora = require('./calculadora');

// Cria variáveis com let
let soma = calculadora.somar(10, 5);
let subtracao = calculadora.subtrair(10, 5);
let multiplicacao = calculadora.multiplicar(10, 5);
let divisao = calculadora.dividir(10, 5);

console.log('Soma:', soma);
console.log('Subtração:', subtracao);
console.log('Multiplicação:', multiplicacao);
console.log('Divisão:', divisao);