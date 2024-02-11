import { saveToStorage } from "./localStorage";

const Projects = [];

function createNewList(list) {
  const name = list;
  const todos = [];
  return {name, todos}
}

function addListToProjects(list) {
  Projects.push(list);
  saveToStorage(Projects);
}

export { Projects, createNewList, addListToProjects }