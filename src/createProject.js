const Projects = [];

function createNewList(list) {
  const name = list;
  const todos = [];
  return {name, todos}
}

function addListToProjects(list) {
  Projects.push(list);
}

// Create default Project
const defList = createNewList('Default');
addListToProjects(defList);

export { Projects, createNewList, addListToProjects }