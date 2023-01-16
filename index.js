// Questão 01
const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, '9', true];

// --------------------------------------------------------------------------------------------------

// Questão 02
// console.log(meuArray[meuArray.length - 1]);

// --------------------------------------------------------------------------------------------------

// Questão 03
// a
// for (let i = 0; i < meuArray.length; i++) {
//     console.log(meuArray[i]);
// }

//b
// meuArray.forEach(item => console.log(item));

// --------------------------------------------------------------------------------------------------

// Questão 04
const meuArrayMutante = meuArray.map(() => 2);
// meuArrayMutante.forEach(item => console.log(item));

// --------------------------------------------------------------------------------------------------

// Questão 05
// a
const numeros = meuArrayMutante.map(n => n + Math.floor(Math.random() * 10));

// b
// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 !== 0) console.log(numeros[i]);
// }

// c
// numeros.forEach(numero => {
//     if (numero > 4) console.log(numero);
// });

// d
const pares = numeros.filter(n => n % 2 === 0);

// --------------------------------------------------------------------------------------------------

// Questão 06
const cores = ['verde', 'amarelo', 'laranja', 'vermelho', 'azul'];

// a
// cores.forEach(cor => console.log(cor.toUpperCase()));

// b 
cores.splice(cores.indexOf('amarelo'), 1);

// c
// cores.forEach(cor => console.log(cor[0].toUpperCase() + cor.substring(1)));
