const ARR = [1, 2, 3, 4, 5];
const TAMANHO_VETOR = 6;

// Throw lança um erro dentro do try que são executado as instruções e caso ocorra o erro o catch captura esse erro tratando ele

const validaArrays = (arr, num) => {
  try {
    if (!arr && !num) {
      throw new ReferenceError("Envie os parâmetros");
    }
    if (typeof arr !== "object") {
      throw new TypeError("Envie um array");
    }
    if (typeof num !== "number") {
      throw new TypeError("Envie um número");
    }
    if (arr.length !== num)
      throw new RangeError("Envie um array do tamanho do numero passado");
    return console.log(`Tudo certo: ${arr} tamanho passado: ${num}`);
  } catch (e) {
    if (e instanceof RangeError) {
      console.log("RangeError!");
      console.log(e.stack); //manda a pilha do erro: nome, message, linha e a call stack tudo isso é a composição de um ECMAScript Error
      //   console.log(e.name); manda o nome
      //   throw e; //manda a pilha do erro
      //  console.log(e.message); mostra a mensagem
    } else if (e instanceof ReferenceError) {
      console.log("ReferenceError!");
      console.log(e.stack);
    } else if (e instanceof RangeError) {
      console.log("RangeError!");
      console.log(e.stack);
    } else {
      console.log("Outro tipo de erro não esperado: " + e + "!");
      console.log(e.stack);
    }
  }
};

// validaArrays(ARR, TAMANHO_VETOR);
// validaArrays();
// validaArrays("", "");
// validaArrays(1, TAMANHO_VETOR);

// const NovoErro = new Error();

// NovoErro.name = "Novo Erro";
// NovoErro.message = "Este erro nunca ocorreu"
// console.log(NovoErro)

function validaArray(arr, tamanho) {
    try {
      if (!arr.length || arr.length !== tamanho) throw new RangeError("O tamanho do array é inválido");

      return arr;
    } catch(e) {
      if (e instanceof RangeError) {
        return console.log(e.message);
      } else {
        return e;
      }
    }
  }

 console.log(validaArray());
