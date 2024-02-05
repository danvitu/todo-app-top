import { Projects } from "./createProject";

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

export { createNewTodo, addTodoToList }