// Solução 1
function verificarPalindromo(string) {
  if (!string) return "String inexistente";
  // O split separa todas as letras retornando um array e com isso o reverse ele reverte esse array
  // E o join ele junta todos esses elementos do array formando uma so string
  // Com isso a gente compara a palavra reversa que foi passada por nos com o que a gente passou
  return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("ama"));

// Solução 2
function varificaPalindromo2(string) {
  if (!string) return;
  if (!string.length) return;

//   Fizemos um for porque a string é uma lista de caracteres que estão juntos e  com a propriedade length a gente percorre ela toda, mas a gente não precisa percorrar ela toda
// o dividido por 2 é porque a gente não precisa percorrer ela toda porque estamos comparando dois caracteres ao mesmo tempo, a gente precisa comparar se a primeira letra é igual o que esta no ultimo indice, então a gente vai entrando e fazendo duas checagem a cada loop, com isso so precisa percorrer so metada -> /2 claro que funcionaria se não fosse so pela metade da string
  for (var i = 0; i < string.length / 2; i++) {
    //   A gente verifica se a string que esta não for igual ao ultimo é false
    // obs: a length é tamanho e não posição, então se eu estou no inicio, o indice é 0 mas o tamanho é 1
    // omo -> 012(i) 123(len) -> então ele compara assim:
    // omo -> indice [0] !== indice [3 -1 -0]
    // omo -> indice [0] !== indice [2]
    // true
    // 2rodada:
    // omo -> indice [1] !== indice [3 -1 -1]
    // omo -> indice [1] !== indice [1]
    // true finaliza por a gente não precisa verificar o outro o pois ele ja foi verificado antes
    if (string[i] !== string[string.length - 1 - i]) {
      return console.log(false);
    }
  }
  return console.log(true);
}

varificaPalindromo2("ama");