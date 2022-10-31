/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

//Classe
class Automovel {
    marca;
    cor;
    gastoMedio;
    constructor(marca, cor, quantidadeKm, kmPorLitros, precoCombustivel) {
        this.marca = marca,
            this.cor = cor,
            this.quantidadeKm = quantidadeKm,
            this.kmPorLitros = kmPorLitros,
            this.precoCombustivel = precoCombustivel,
            this.gastoMedio = quantidadeKm / kmPorLitros * precoCombustivel;
    }
    //Metodo
    calcularGastoMedio() {
        console.log(`O carro ${this.marca} irá gastar um total de R$${this.gastoMedio} para percorrer ${this.quantidadeKm}
             Quilômetros com uma utilização média de ${this.kmPorLitros} quilômetros por litro`)
    }
}

const sandero = new Automovel('Sandero', 'Preto', 100, 10, 5);

sandero.calcularGastoMedio();