import './style.css';
import { displayProjects, displayTodos } from './displayController';
import { initializeTodoModal, addTodoModal, addProjectModal } from './popups';
import { createNewTodo, addTodoToList } from './createTodo';
import { createNewList, addListToProjects } from './createProject';

// Create default Project
const defList = createNewList('Default');
addListToProjects(defList);

// Test Todo
const newTodo = createNewTodo('Create a website', 'Using Tilda', '2024 8 2', 'mid', 'Default');
addTodoToList(newTodo);

displayTodos(defList);
displayProjects();
addProjectModal();
initializeTodoModal();
addTodoModal();