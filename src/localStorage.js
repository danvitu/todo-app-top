function saveToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function loadFromStorage() {
  return JSON.parse(localStorage.getItem('projects'));
}

export {saveToStorage, loadFromStorage}