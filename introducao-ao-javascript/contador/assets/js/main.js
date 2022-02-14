let count = 0;

const CURRENT_NUMBER = document.getElementById("currentNumber");
const BUTTON_INCREMENT = document.getElementById("button-increment");
function increment() {
  if (count < 10) {
    count++;
    CURRENT_NUMBER.innerHTML = count;
    CURRENT_NUMBER.style.color = "black";
  }
  if (count >= 10) {
    BUTTON_INCREMENT.style.cursor = "not-allowed";
  }
}

function decrement() {
  count--;
  CURRENT_NUMBER.innerHTML = count;
  BUTTON_INCREMENT.style.cursor = "pointer";
  if (count < 0) {
    CURRENT_NUMBER.style.color = "red";
  }
}

// const CURRENT_NUMBER_WRAPPER = document.getElementById('currentNumber');
// let currentNumber = 0;

// function increment() {
//     currentNumber = currentNumber + 1;
//     CURRENT_NUMBER_WRAPPER.innerHTML = currentNumber
// }

// function decrement() {
//     currentNumber = currentNumber - 1;
//     CURRENT_NUMBER_WRAPPER.innerHTML = currentNumber
// }

let contador = 0;

const CURRENT = document.getElementById("number");
const BUTTON = document.getElementById("button");
const BUTTON_DECREMENT = document.getElementById("button-decrement");

BUTTON.addEventListener("click", () => {
  if (contador < 10) {
    contador++;
    CURRENT.innerHTML = contador;
    CURRENT.style.color = "black";
  }
  if (contador >= 10) {
    BUTTON.style.cursor = "not-allowed";
  }
});

BUTTON_DECREMENT.addEventListener("click", () => {
  contador--;
  CURRENT.innerHTML = contador;
  BUTTON.style.cursor = "pointer";
  if (contador < 0) {
    CURRENT.style.color = "red";
  }
});
