//Inserir o preço do combustível
const precoCombustivel = 5.79, kmPorLitros = 10, distanciaKm = 100;

let valorViagem;

valorViagem = distanciaKm/kmPorLitros*precoCombustivel;

console.log("Foram gastos R$ "+valorViagem+" nessa viagem");