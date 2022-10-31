//Objeto literal

//modo de criar um objeto, lembrando que sempre dentro do objeto é declaro na forma chave-valor
const rodolfo = {
    nome: 'Rodolfo F Cardoso',
    idade: 30,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

//aqui vamos imprimir os valores dentro do objeto
/*
console.log(rodolfo.nome);
console.log(rodolfo.idade);
console.log(rodolfo)

//Podemos também incrementar o objeto dessa forma:

rodolfo.altura = 180;

console.log(rodolfo)
*/

rodolfo.descrever();