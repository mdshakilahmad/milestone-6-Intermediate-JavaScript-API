// todo
function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displaytodos(data));
}
function displaytodos(todos) {
  const todoContainer = document.getElementById("todo-container");
  for (const todo of todos) {
    console.log(todo);
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.innerHTML = `
      <h4>id:${todo.id}</h4>
      <h4>title:${todo.title}</h4>
      <h4>completed:${
        todo.completed === true ? "complete" : "not complete"
      }</h4>
      `;
    todoContainer.appendChild(todoDiv);
  }
}

loadData();
