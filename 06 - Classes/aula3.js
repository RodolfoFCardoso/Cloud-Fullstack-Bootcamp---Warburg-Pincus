//Comparar pessoas, qual é mais velha

class Pessoa {
    nome;
    idade;
    anoNasc;

    constructor(nome, idade, anoNasc) {
        this.nome=nome;
        this.idade=idade;
        this.anoNasc=2022-idade;
    }

    descreverPessoa() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e eu nasci em ${this.anoNasc}`);
    }
}

function compararIdade(p1, p2) {

    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    }else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const p1 = new Pessoa('Rodolfo', 30);
const p2 = new Pessoa('Vini', 31);

console.log(compararIdade(p1, p2));