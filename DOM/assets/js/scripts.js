function changeMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
    // O toggle ele coloca a classe caso ela não exista, se existir ele retira classe do elemento
  button.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";

  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + " ON";
    return;
  }

  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + " ON";
}

const darkModeClass = "dark-mode";
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
// [0] -> index, porque quando a gente seleciona algo do dom, ele nos retorna um array, um nó, com isso como so tem um body então é o body do index 0
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

button.addEventListener("click", changeMode);

// https://www.delftstack.com/pt/howto/javascript/javascript-remove-class/
// https://pt.stackoverflow.com/questions/225809/como-adicionar-uma-classe-em-javascript-puro