//Classes com contructor

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

// Criando uma nova pessoa e passando os atributos para imprimir na tela
const rodolfo = new Pessoa('Rodolfo', 30);

//Utilizando a função descrever pessoa para imprimir na tela o nome e idade passado anteriormente
rodolfo.descreverPessoa();


