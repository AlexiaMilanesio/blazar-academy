const title = document.createElement("h1");


title.textContent = "Lista degli utenti";

document.body.appendChild(title);


const getTodos = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todoList) => {
    for (const todo of todoList.slice(0, 10)) {
      createEl(todo.title);
    }
  });

getTodos();