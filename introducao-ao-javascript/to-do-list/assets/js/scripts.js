const form = document.getElementById("task-form");
const taskList = document.getElementById("tasks");

form.onsubmit = function (e) {
  // Aqui a gente esta previndo do evento default que é recarregar a pagina apos o submit
  e.preventDefault();
  const inputField = document.getElementById("task-input");
  if (
    inputField.value !== null &&
    inputField.value !== "" &&
    inputField.value.trim()
  ) {
    addTask(inputField.value);
  }
  // reseta o form
  form.reset();
};

function addTask(task) {
  // Criando elementos na tela:
  const newTask = document.createElement("input");
  const taskLabel = document.createElement("label");
  // Ele cria um text a partir do text capturado no input
  const taskDescriptionNode = document.createTextNode(task);
  //a div pra cada tarefa  
  const taskContainer = document.createElement("div");

  // Criando um checkbox do tipo(type) checkbox
  newTask.setAttribute("type", "checkbox");
  // e esse checkbox possui dois atributos name e id com o nome da task
  newTask.setAttribute("name", task);
  newTask.setAttribute("id", task);

  // Label é tipo um p que possui um atributo for e nesse atributo vai o nome da task
  taskLabel.setAttribute("for", task);
  // o filho dessa label é o text criado na tela
  taskLabel.appendChild(taskDescriptionNode);

  // no html tem uma div com o id tasks e dentro dele(filhos) vai esse taskContainer que é uma div que possui o nome da class task-item que é a div pra cada tarefa
  taskContainer.classList.add("task-item");
  taskContainer.appendChild(newTask);
  taskContainer.appendChild(taskLabel);
  
  //esse aqui no caso é a div no html que tem o id tasks e nele a gente insere o taskcontainer que é cada tarefa ou item da lista   
  taskList.appendChild(taskContainer);
}
