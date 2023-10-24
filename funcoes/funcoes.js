// Funções
//const texto = prompt("Digite um texto: ")

// executa a função
imprimeTexto(soma());

// declara a função
function imprimeTexto(texto) {
    console.log(texto);
}

// 3 formas de escrever funções
function soma() {
    return 2 + 2;
}

function soma2(x, y) {
    return x + y;
}

/**
 * Math.round(4.3) -> Faz o arredondamento de um número de ponto flutuante para o inteiro mais próximo.
 * Math.ceil(5.2) -> Faz o arredondamento para o valor mais alto, também conhecido como teto
 * Math.floor(5.2) -> Faz o arredondamento para o valor mais baixo, também conhecido como piso
 * Math.trunc(4.3) -> Desconsidera os números decimais, o que é conhecido como truncamento.
 * Math.pow(4 , 2) -> Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3)
 * Math.min(0, 150, 30, 20, -8, -200) -> Retorna o menor valor entre os argumentos.
 * Math.max(0, 150, 30, 20, -8, -200) -> Retorna o maior valor entre os argumentos
 * Math.random() -> Retorna um valor randômico  entre 0 e 1
 * Math.sqrt(64) -> Retorna a raiz quadrada de um número.
 */

// Parâmetros e argumentos

// parâmetros de função
function somaDoisNumeros(num1, num2) {
    return num1 + num2;
}

console.log(somaDoisNumeros(5, 7))

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade} anos.`;
}

console.log(nomeIdade("João",  25));

// Expressão de função
const soma3 = function(num1, num2) {return num1 + num2}
console.log(soma3(10,24));

// Arrow function
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma4 = (num1, num2) => num1 + num2;

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}

const somaNumerosPequenos2 = (num1, num2) => (num1 > 10 || num2 > 10) ? "Somente números de 1 a 9" : num1 + num2;
