import { Projects } from "./createProject";
import { format } from "date-fns";
import { saveToStorage } from "./localStorage";

function createNewTodo (title, desc, dueDate, priority, list) {
  const complete = false;
  return {title,
          desc,
          dueDate: format(new Date(dueDate), 'dd LLL yyyy'),
          priority,
          list,
          complete}
}

function addTodoToList (todo) {
  Projects.forEach((list) => {
    if (list.name === todo.list) {
      list.todos.push(todo);
    }
  });
  saveToStorage(Projects);
}

function changeCompleteStatus (todo) {
  todo.complete = !todo.complete;
}

export { createNewTodo, addTodoToList, changeCompleteStatus}