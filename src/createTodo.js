import { Projects } from "./createProject";
import { displayTodos } from "./displayController";

function createNewTodo (title, desc, dueDate, priority, list) {
  const complete = false;
  return {title, desc, dueDate, priority, list, complete}
}

function addTodoToList (todo) {
  Projects.forEach((list) => {
    if (list.name === todo.list) {
      list.todos.push(todo);
    }
  });
  console.log(Projects);
}

// Test Todo
const newTodo = createNewTodo('Create a website', 'Using Tilda', '20-02-2024', 'mid', 'Default');
addTodoToList(newTodo);

displayTodos(Projects[0]);

export { createNewTodo, addTodoToList }