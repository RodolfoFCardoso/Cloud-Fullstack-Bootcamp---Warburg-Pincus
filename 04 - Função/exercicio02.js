//Realizar o calculo para diferentes formas de pagamentos

// Legenda condPgto 1- A vista, 2- Pix ou Dinheiro, 3- 2x, 4- Mais de 2x

let valorProduto = 100.00;

function condPgto(condPgto) {
    if (condPgto === 1) {
        return valorProduto = valorProduto - (valorProduto * 0.10)
    } else if (condPgto === 2) {
        return valorProduto = valorProduto - (valorProduto * 0.15)
    } else if (condPgto === 3) {
        return valorProduto
    } else {
        return valorProduto = valorProduto + (valorProduto * 0.10)
    }
}

condPgto(1);

console.log('O valor do produto a ser pago é '+ valorProduto);