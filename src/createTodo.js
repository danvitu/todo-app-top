import { Projects } from "./createProject";
import { format } from "date-fns";

function createNewTodo (title, desc, dueDate, priority, list) {
  const complete = false;
  return {title,
          desc,
          dueDate: format(new Date(dueDate), 'dd LLLL yyyy'),
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
  console.log(Projects);
}

function editTodo (todo) {
  todo.title = 'New Title';
}

function changeCompleteStatus (todo) {
  todo.complete = !todo.complete;
}

export { createNewTodo, addTodoToList, editTodo, changeCompleteStatus}