//Classes

class Pessoa {
    nome;
    idade;

    descreverPessoa() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const rodolfo = new Pessoa();
rodolfo.nome ='Rodolfo Frederico Cardoso';
rodolfo.idade = 30;

rodolfo.descreverPessoa();