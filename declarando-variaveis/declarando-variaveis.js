// var -> pode ser usada antes de declarar

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log("Área " + area);
var area;

// let -> tem que ser declarada antes de usar
let forma = 'retâmgulo';
let altura1 = 5;
let comprimento1 = 7;
let area1;

if (forma === 'retâmgulo') {
    area1 = altura1 * comprimento1;
} else {
    area1 = (altura1 * comprimento1) / 2;
}

console.log("Área1 " + area1);

// const -> uma vez declarada, não pode ser modificada

const forma1 = 'triângulo';
const altura2 = 5;
const comprimento2 = 7;
let area2;

if (forma1 === 'quadrado') {
    area2 = altura2 * comprimento2;
} else {
    area2 = (altura2 * comprimento2) / 2;
}

console.log(`Área2 ${area2}`);

// truthy e falsy

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

const usuarioLogado = true;
const contaPaga = false;

// null = vazio ou nada
// underfined = variável declara mas não atribuída(definida)

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

// Conversão de tipos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString);
console.log(numero == numeroString);

console.log(typeof numero);
console.log(typeof numeroString);

// conversão explícita

/* Number() */
console.log(numero + Number(numeroString));
/* String */
console.log(String(numero) + numeroString)