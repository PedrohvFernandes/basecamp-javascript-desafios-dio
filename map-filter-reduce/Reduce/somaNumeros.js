const arr = [1, 2, 3];

function somaNumeros(arr) {
  // currentElement é o valor posterior a cada iteração + o item que vai acumular um valor a cada soma
  return arr.reduce(function (item, currentElement) {
    console.log({ item });
    console.log({ currentElement });
    return item + currentElement;
  });
}

console.log(somaNumeros(arr));
// https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer
// https://blog.betrybe.com/javascript/javascript-reduce/

// Resposta

function somaNumbers(arr) {
  if (!arr || !arr.length) return;
  const soma = arr.reduce((prev, curr) => prev + curr);
  console.log({ item });
  console.log({ currentElement });
  return soma;
}

console.log(somaNumbers([1, 1, 1, 3]));

// Com valor inicial: 0
function somarNumeros(arr) {
  // currentElement é o valor anterior a cada iteração + o item que vai acumular um valor a cada soma
  return arr.reduce(function (item, currentElement) {
    console.log({ item });
    console.log({ currentElement });
    return item + currentElement;
  }, 0);
}

console.log(somarNumeros([1, 1, 1, 3]));
