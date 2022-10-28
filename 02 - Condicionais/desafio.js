const
    precoEtanol = 4.99,
    precoGasolina = 5.99,
    tipoCombustivel = 'etanol';
kmPorLitros = 10,
    distanciaKm = 100;

if (tipoCombustivel === 'gasolina') {
    valorViagem = distanciaKm / kmPorLitros * precoGasolina;
    console.log("Foram gastos R$ " + valorViagem.toFixed(2) + " nessa viagem utilizando gasolina");
} else if (tipoCombustivel === 'etanol') {
    valorViagem = distanciaKm / kmPorLitros * precoEtanol;
    console.log("Foram gastos R$ " + valorViagem.toFixed(2) + " nessa viagem utilizando etanol");
} else {
    console.log("Erro, insira novamente utilizando gasolina ou etanol")
}



