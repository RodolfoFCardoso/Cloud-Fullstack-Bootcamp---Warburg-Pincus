const notas = [];

notas.push(5);
notas.push(10);
notas.push(9);
notas.push(7);
notas.push(2);
notas.push(8);

let soma = 0;
//fazendo um looping onde ele verifica cada nota
for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    soma = soma + nota;
}
//Pegando a soma de todas as notas e dividindo pela quantidade de provadas dadas
let media = soma/notas.length;

//ToFixed serve para reduzir a quantidade de números após a virgula
console.log(media.toFixed(1))
