const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaCampo() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBtnDelete(li) {
    li.innerText += ' ';
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Deletar';
    li.appendChild(btnDelete);
}

function criaTarefa(textoinput) {
  const li = criaLi();
  li.innerText = textoinput;
  tarefas.appendChild(li);
  limpaCampo();
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});
