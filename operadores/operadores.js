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