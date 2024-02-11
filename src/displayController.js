import { Projects } from "./createProject";
import { changeCompleteStatus } from "./createTodo";
import DelIcon from "./icons/delete-1487-svgrepo-com.svg";
import { saveToStorage } from "./localStorage";

function displayProjects() {
  const projectsList = document.querySelector('.projects');
  projectsList.textContent = '';
  
  Projects.forEach((list) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.toggle('project');
    projectContainer.setAttribute('data-index', Projects.indexOf(list));

    const projectName = document.createElement('div');
    projectName.classList.toggle('project-name');
    projectName.textContent = `# ${list.name}`;
    projectContainer.appendChild(projectName);

    projectName.addEventListener('click', () => {
      displayTodos(list);
    });

    const projectRemoveButton = document.createElement('button');
    projectRemoveButton.classList.toggle('project-remove-button');
    projectContainer.appendChild(projectRemoveButton);
    const deleteIcon = new Image();
    deleteIcon.src = DelIcon;
    deleteIcon.setAttribute('height', '20px');
    if (list.name !== 'Default') {
    projectRemoveButton.appendChild(deleteIcon);
    }
    projectRemoveButton.addEventListener('click', () => {
      Projects.splice(projectContainer.dataset.index, 1);
      displayProjects();
      displayTodos(Projects[0]);
      saveToStorage(Projects);
    })

    projectsList.appendChild(projectContainer);
  });
}

function displayTodos(list) {
  const todos = document.querySelector('.todos');
  todos.textContent = '';
  const projectName = document.createElement('h2');
  projectName.classList.toggle('project-name');
  projectName.textContent = `${list.name} list`;
  todos.appendChild(projectName);
  const itemsContainer = document.createElement('div');
  itemsContainer.classList.toggle('items-container');
  todos.appendChild(itemsContainer);

  list.todos.forEach((todoItem) => {
    const todo = document.createElement('div');
    todo.classList.toggle('todo-item');
    todo.setAttribute('data-index', list.todos.indexOf(todoItem));
    const todoContainerForTitle = document.createElement('div');
    const todoContainerForOthers = document.createElement('div');
    todoContainerForTitle.classList.toggle('todo-cont-title');
    todoContainerForOthers.classList.toggle('todo-cont-others');

    const todoCompleteAndTitle = document.createElement('div');
    todoCompleteAndTitle.classList.toggle('todo-complete-title');

    const todoComplete = document.createElement('input');
    todoComplete.setAttribute('type', 'checkbox');
    if (todoItem.complete) {
      todo.classList.toggle('completed');
      todoComplete.setAttribute('checked', 'checked');
    }
    todoCompleteAndTitle.appendChild(todoComplete);
    
    todoComplete.addEventListener('click', (e) => {
      changeCompleteStatus(todoItem);
      if (todoItem.complete) {
        todo.classList.toggle('completed');
      } else {
        todo.classList.remove('completed');
      }
      e.stopImmediatePropagation()
    });

    const todoTitle = document.createElement('p');
    todoTitle.textContent = todoItem.title;
    todoCompleteAndTitle.appendChild(todoTitle);

    todoContainerForTitle.appendChild(todoCompleteAndTitle);

    const todoDate = document.createElement('p');
    todoDate.classList.toggle('todo-date');
    todoDate.textContent = todoItem.dueDate;
    todoContainerForTitle.appendChild(todoDate);

    const todoDesc = document.createElement('p');
    todoDesc.classList.toggle('todo-desc');
    todoDesc.textContent = todoItem.desc;
    todoContainerForOthers.appendChild(todoDesc);

    const todoPriority = document.createElement('p');
    todoPriority.textContent = todoItem.priority;
    todoPriority.classList.toggle('priority');
    switch (todoItem.priority) {
      case 'low':
        todoPriority.classList.toggle('low-priority');
        todo.classList.toggle('todo-low-priority');
        break;
      case 'medium':
        todoPriority.classList.toggle('mid-priority');
        todo.classList.toggle('todo-mid-priority');
        break;
      case 'high':
        todoPriority.classList.toggle('high-priority');
        todo.classList.toggle('todo-high-priority');
        break;
    }
    todoContainerForOthers.appendChild(todoPriority);


    // Add remove Todo button 

    const todoRemoveButton = document.createElement('button');
    todoRemoveButton.classList.toggle('btn-remove-todo');
    const deleteIcon = new Image();
    deleteIcon.src = DelIcon;
    deleteIcon.setAttribute('height', '20px');
    todoRemoveButton.appendChild(deleteIcon);
    todoContainerForOthers.appendChild(todoRemoveButton);

    todoRemoveButton.addEventListener('click', () => {
      list.todos.splice(todo.dataset.index, 1);
      displayTodos(list);
    });

    todo.appendChild(todoContainerForTitle);
    todo.addEventListener('click', () => {
      if (!todo.contains(todoContainerForOthers)) {
      todo.appendChild(todoContainerForOthers);
      } else {
      todo.removeChild(todoContainerForOthers);
      }
    });

    itemsContainer.appendChild(todo);
  })
}

export { displayProjects, displayTodos }