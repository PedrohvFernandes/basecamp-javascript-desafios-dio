function compararNumeros(num1, num2) {
  const total = num1 + num2;
  if(!num1 || !num2) return "Defina dois numeros"
  if (num1 === num2) {
    if (total > 20 && total < 10) {
      console.log(`Os números ${num1} e ${num2} são iguais, sua soma é ${total}, que é maior que 20 e menor que 10 ".
        `);
    } else if (total < 20 && total > 10) {
      console.log(`Os números ${num1} e ${num2} são iguais, sua soma é ${total}, que é maior que 10 e menor que 20 ".
        `);
    } else if (total < 10 && total < 20) {
      console.log(`Os números ${num1} e ${num2} são iguais, sua soma é ${total}, que é menor que 10 e 20 ".
        `);
    }else if (total > 10 && total > 20) {
        console.log(`Os números ${num1} e ${num2} são iguais, sua soma é ${total}, que é maior que 10 e 20 ".
            `);
      }
  } else if (num1 !== num2) {
    if (total > 20 && total < 10) {
      console.log(`Os números ${num1} e ${num2} não são iguais são iguais, sua soma é ${total}, que é maior que 20 e menor que 10 ".
          `);
    } else if (total < 20 && total > 10) {
      console.log(`Os números ${num1} e ${num2} não são iguais são iguais, sua soma é ${total}, que é maior que 10 e menor que 20 ".
          `);
    } else if (total < 10 && total < 20) {
      console.log(`Os números ${num1} e ${num2} não são iguais, sua soma é ${total}, que é menor que 10 e 20 ".
          `);
    }else if (total > 10 && total > 20) {
        console.log(`Os números ${num1} e ${num2} não são iguais, sua soma é ${total}, que é maior que 10 e 20 ".
            `);
      }
  }
}

console.log(compararNumeros(-1, 2));
console.log(compararNumeros(1, 1));

// Aqui a responsabilidade é nitida pra cada objetivo
function comparaNumeros(num1, num2) {
  if(!num1 || !num2) return "Defina dois numeros"
  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
  let primeiraFrase = `Os números ${num1} e ${num2}`;
  let simNao = "não";

  if (num1 === num2) {
    simNao = "";
  }

  return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;
  let comparaDez = "menor";
  let comparaVinte = "menor";

  if (soma > 10) {
    comparaDez = "maior";
  }

  if (soma > 20) {
    comparaVinte = "maior";
  }

  return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));
