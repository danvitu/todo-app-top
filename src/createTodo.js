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

function editTodo (todo) {
  todo.title = 'New Title';
}

function changeCompleteStatus (todo) {
  todo.complete = !todo.complete;
}

export { createNewTodo, addTodoToList, editTodo, changeCompleteStatus}