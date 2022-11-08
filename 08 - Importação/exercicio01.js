const {gets, print} = require('./funcoes-auxiliares');

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (maiorValor < numeroSorteado) {
        maiorValor = numeroSorteado;
    }   
}

print(maiorValor);