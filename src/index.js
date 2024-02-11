import './style.css';
import { displayProjects, displayTodos } from './displayController';
import { initializeTodoModal, addTodoModal, addProjectModal } from './popups';
import { createNewTodo, addTodoToList } from './createTodo';
import { Projects, createNewList, addListToProjects, loadProjectsFromLocalStorage } from './createProject';
import { loadFromStorage } from './localStorage';

const defList = createNewList('Default');
addListToProjects(defList);

const newTodo = createNewTodo('Create a website', 'Using Tilda', '2024 1 1', 'low', 'Default');
const newTodo2 = createNewTodo('Create a website', 'Using JavaScript', '2024 2 9', 'medium', 'Default');
const newTodo3 = createNewTodo('Create a website', 'Using React', '2024 8 6', 'high', 'Default');
addTodoToList(newTodo);
addTodoToList(newTodo2);
addTodoToList(newTodo3);

displayProjects();
displayTodos(defList);
addProjectModal();
initializeTodoModal();
addTodoModal();

// const fromStorage = loadFromStorage();
// console.log(fromStorage);

// fromStorage.forEach(list => {
//   addListToProjects(createNewList(list.name));
//   displayProjects();
//   list.todos.forEach(todo => {
//     addTodoToList(createNewTodo(todo.title, todo.desc, todo.dueDate, todo.priority, todo.list));
//     displayTodos(list);
//   })
// });