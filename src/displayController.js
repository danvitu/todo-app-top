import { Projects, createNewList, addListToProjects } from "./createProject";
import { createNewTodo, addTodoToList } from "./createTodo";

function addProjectModal() {
  const addNewProjectModal = document.querySelector('.btn-new-project-modal');
  addNewProjectModal.addEventListener('click', () => {
    const propmtInput = prompt('Enter new Project name');
    const newList = createNewList(propmtInput);
    addListToProjects(newList);
    displayProjects();
    console.log(Projects);
  });
}

function displayProjects() {
  const projectsList = document.querySelector('.projects');
  projectsList.textContent = '';
  
  Projects.forEach((list) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.toggle('project');
    projectContainer.setAttribute('data-index', Projects.indexOf(list));

    const projectName = document.createElement('div');
    projectName.classList.toggle('project-name');
    projectName.textContent = list.name;
    projectContainer.appendChild(projectName);

    projectName.addEventListener('click', () => {
      displayTodos(list);
    });

    // Add Project remove button

    const projectRemoveButton = document.createElement('button');
    projectRemoveButton.textContent = 'del';
    projectContainer.appendChild(projectRemoveButton);

    projectRemoveButton.addEventListener('click', () => {
      Projects.splice(projectContainer.dataset.index, 1);
      displayProjects();
    })

    projectsList.appendChild(projectContainer);
  });
}

function displayTodos(list) {
  const todos = document.querySelector('.todos');
  todos.textContent = '';
  const projectName = document.createElement('h2');
  projectName.classList.toggle('project-name');
  projectName.textContent = list.name;
  todos.appendChild(projectName);

  list.todos.forEach((todoItem) => {
    const todo = document.createElement('div');
    todo.classList.toggle('todo-item');
    todo.setAttribute('data-index', list.todos.indexOf(todoItem));

    const todoComplete = document.createElement('input');
    todoComplete.setAttribute('type', 'checkbox');
    todo.appendChild(todoComplete);

    const todoTitle = document.createElement('p');
    todoTitle.textContent = todoItem.title;
    todo.appendChild(todoTitle);

    const todoDesc = document.createElement('p');
    todoDesc.textContent = todoItem.desc;
    todo.appendChild(todoDesc);

    const todoDate = document.createElement('p');
    todoDate.textContent = todoItem.dueDate;
    todo.appendChild(todoDate);

    const todoPriority = document.createElement('p');
    todoPriority.textContent = todoItem.priority;
    todo.appendChild(todoPriority);

    // Add edit Todo button

    const todoEditButton = document.createElement('button');
    todoEditButton.classList.toggle('btn-edit-todo');
    todoEditButton.textContent = 'Edit';
    todo.appendChild(todoEditButton);

    todoEditButton.addEventListener('click', () => {

    });

    // Add remove Todo button 

    const todoRemoveButton = document.createElement('button');
    todoRemoveButton.classList.toggle('btn-remove-todo');
    todoRemoveButton.textContent = 'Remove';
    todo.appendChild(todoRemoveButton);

    todoRemoveButton.addEventListener('click', () => {
      list.todos.splice(todo.dataset.index, 1);
      displayTodos(list);
    });

    todos.appendChild(todo);
  })
}

function initializeModal() {
  const openTodoModal = document.querySelector('.new-todo-dialog');
  const addNewTodoButton = document.querySelector('.btn-new-todo-modal');
  addNewTodoButton.addEventListener('click', () => {
    openTodoModal.showModal();
    refreshModalLists();
  });
}

function refreshModalLists() {
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
    const newTodo = createNewTodo(todoTitle.value, todoDesc.value, todoDate.value, todoPriority.value, todoList.value)
    addTodoToList(newTodo);
    Projects.forEach((list) => {
      if (list.name === todoList.value) {
        displayTodos(list);
      }
    });
  });

  const closeModalButton = document.querySelector('.close-modal');
  closeModalButton.addEventListener('click', () => {
    openTodoModal.close();
    console.log('closed');
  });
}

export { displayProjects, addProjectModal, displayTodos, addTodoModal, initializeModal }