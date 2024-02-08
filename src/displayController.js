import { Projects } from "./createProject";
import { editTodo, changeCompleteStatus } from "./createTodo";

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
    if (todoItem.complete) {
      todo.classList.toggle('completed');
      todoComplete.setAttribute('checked', 'checked');
    }
    todo.appendChild(todoComplete);
    
    todoComplete.addEventListener('change', () => {
      changeCompleteStatus(todoItem);
      if (todoItem.complete) {
        todo.classList.toggle('completed');
      } else {
        todo.classList.remove('completed');
      }
      console.log(todoItem);
    });

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
      editTodo(todoItem);
      displayTodos(list);
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

export { displayProjects, displayTodos }