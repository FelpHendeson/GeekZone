const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

carregaTarefas();

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
    btnDelete.setAttribute('class', 'delete');
    btnDelete.setAttribute('id', 'btnDelete');
    btnDelete.setAttribute('title', 'Deleta está tarefa')
    li.appendChild(btnDelete);
};

function criaTarefa(textoinput) {
  const li = criaLi();
  li.innerText = textoinput;
  tarefas.appendChild(li);
  limpaCampo();
  criaBtnDelete(li);
  salvarTarefas();
};

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;
  if( el.classList.contains('delete')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for(let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Deletar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
};

function carregaTarefas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  };
};
