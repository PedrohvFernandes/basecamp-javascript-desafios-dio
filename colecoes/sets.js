let arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

let mySet = new Set(arr);
// myset.add

// Acaba retorando um set e não um array
console.log(mySet);

// Resposta:
// Aqui ele ja retorna um array mesmo
// o Rest ... foi usado para que cada elemento do set vai adicionar dentro do array, sem o spread eu estaria colocando um set dentro do array, então para que os elementos do set se tornem elementos do array eu utilizo o argumento rest ... rest vem do restante para irem dentro do return, já o spred ele espalha os valores dentro dele e geralmente o spread é passado quando a gente chama uma função
function uniqueElements(array) {
  let unique = new Set(array);
  return [...unique];
}

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(array));

// Exemplo spread:
const soma = (a, b) => a + b;

const valores = [10, 50];

//   Ele espalha os valores para serem somados
console.log(soma(...valores)); // saída: 60

// Outro exemplo
const primeirosItens = [1, 2, 3];

const outrosItens = [...primeirosItens, 4, 5, 6];

console.log(outrosItens); // [ 1, 2 , 3, 4, 5, 6 ]

//   Rest: ele junta o restante dos valores, funcionando so dentro da função
function getArgumentos(valor1, ...outrosValores) {
  return {
    valor1,
    outrosValores,
  };
}

console.log(getArgumentos("DevMedia", "curte", "Javascript"));
// { valor1: 'DevMedia', outrosValores: [ 'curte', 'Javascript' ] }

//   https://www.devmedia.com.br/javascript-operadores-rest-e-spread/41200
// https://www.horadecodar.com.br/2019/03/19/como-funcionam-o-rest-e-o-spread-operator/