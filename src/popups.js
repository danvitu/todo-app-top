import { createNewTodo, addTodoToList } from "./createTodo";
import { Projects, createNewList, addListToProjects } from "./createProject";
import { displayProjects, displayTodos } from "./displayController";

function addProjectModal() {
  const addNewProjectModal = document.querySelector('.btn-new-project-modal');
  addNewProjectModal.addEventListener('click', () => {
    let propmtInput = prompt('Enter new Project name');
    if (propmtInput === null || propmtInput === '') {
      alert('Project should have name');
      return
    }
    const newList = createNewList(propmtInput);
    addListToProjects(newList);
    displayProjects();
    console.log(Projects);
  });
}

function initializeTodoModal() {
  const openTodoModal = document.querySelector('.new-todo-dialog');
  const addNewTodoButton = document.querySelector('.btn-new-todo-modal');
  addNewTodoButton.addEventListener('click', () => {
    openTodoModal.showModal();
    refreshModalLists();
  });
}

function resetForm() {
  const addTodoForm = document.querySelector('#addform');
  addTodoForm.reset();
}

function refreshModalLists() {
  resetForm();
  const todoList = document.querySelector('#list');
  todoList.textContent = '';
  Projects.forEach((list) => {
    const listElement = document.createElement('option');
    listElement.textContent = list.name;
    listElement.setAttribute('value', list.name);
    todoList.appendChild(listElement);
  });
}

function addTodoModal() {
  const openTodoModal = document.querySelector('.new-todo-dialog');
  const todoTitle = document.querySelector('#title');
  const todoDesc = document.querySelector('#description');
  const todoDate = document.querySelector('#dueDate');
  const todoPriority = document.querySelector('#priority');
  const todoList = document.querySelector('#list');

  const addNewTodoModalButton = document.querySelector('.add-button');
  addNewTodoModalButton.addEventListener('click', () => {
    if (todoTitle.checkValidity() && todoDate.checkValidity()) {
      const newTodo = createNewTodo(todoTitle.value, todoDesc.value, todoDate.value, todoPriority.value, todoList.value)
      addTodoToList(newTodo);
      Projects.forEach((list) => {
      if (list.name === todoList.value) {
        displayTodos(list);
      }
    });
    }
  });

  const closeModalButton = document.querySelector('.close-modal');
  closeModalButton.addEventListener('click', () => {
    openTodoModal.close();
  });
}

export { addProjectModal, addTodoModal, initializeTodoModal }