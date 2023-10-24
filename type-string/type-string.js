// type String

const texto1 = "Olá, mundo";
const texto2 = 'Olá, mundo';
const senha = "senhasupersegura123";
const stringDeNumeros = "231654";

const citacao = 'Meu nome é '
const meuNome = "José Fábio";

// concatenação

console.log(citacao + meuNome);

// template string u template literal

// transformação de código Unicode -> encontrados na home.unicode.org
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
const sharp = '\uFF03'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
console.log(sharp)


// minúscula e comparação de strings
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true
console.log(inputMinusculo.length)