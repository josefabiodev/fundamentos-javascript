// Operadores

// == -> compara e faz comversão implícita - compara só o valor
const num= 5;
const text = '5';

console.log(num == text); // true

// === -> comparação explícita - compara tipo e valor
console.log(num === text); // false

console.log(typeof num);
console.log(typeof text);

// Conversão explícita
Number();
String();

/*
    adição -> +
    subtração -> -
    multiplicação -> *
    divisão -> /

    de atribuição -> =
    de comparação -> == e ===

    Operadores lógicos

    ou -> ||
    e -> &&

    Operadores comparação
    igual -> == ou ===
    maior -> >
    menor -> <
    maior igual -> >=
    menor igual -> <=
    não igual -> !=
    estritamente não migual -> !==
*/

// Operador ternário

const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
    console.log("Pode beber.")
} else {
    console.log("Não pode beber.")
}

// com operador ternario
console.log(idadeCliente >= idadeMinima ? "Pode beber" : "Não pode beber");

// Template literal - template string
const nome = "Fábio";
const apresentacao = `Meu nome é ${nome}`;

console.log(apresentacao);

