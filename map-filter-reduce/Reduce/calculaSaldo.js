// Reduce agrupa todos os elementos de acordo com a sua regra, no caso da soma ele soma todos tranformando em um so numero
const arrPrecos = [1, 2, 40];
const saldoDisponivel = 30;

function calcularSaldo(arr, saldoDisponivel) {
  // currentElement é o valor anterior a cada iteração + o item que vai acumular um valor

  const soma = arr.reduce((item, currentElement) => item + currentElement);
  const saldoPosCompra = soma - saldoDisponivel;
  return `Saldo anterior: ${saldoDisponivel} $ reais
Soma da compra ${soma} $ reais
Saldo disponivel : ${saldoPosCompra} $ reais`;
}

console.log(calcularSaldo(arrPrecos, saldoDisponivel));

// Resposta:
function calculaSaldo(saldo, itens) {
  if (!saldo || !itens || !itens.length) return "Envie todos os parâmetros";

  const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

  return `O saldo final será de ${saldoFinal} reais`;
}

let lista = [
  {
    preco: 2,
    nome: "maçã",
  },
  {
    preco: 30,
    nome: "roupa",
  },
  {
    preco: 25,
    nome: "carne",
  },
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));

// Com index pra saber a rodada que ele ta

function calculo(saldoDisponivel, lista){
	return lista.reduce(function (prev, current, index){
		console.log('rodada ', index + 1)
		console.log({prev})
		console.log({current})
		return prev - current.preco;
	}, saldoDisponivel)

}

console.log(calculo(saldo, lista))