const title = document.createElement("h1");
const input = document.createElement("input");
const button = document.createElement("button");
const list = document.createElement("ul");

button.textContent = "Add";
button.classList.add = "add-btn";
title.textContent = "Lista della spesa";

document.body.appendChild(title);
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(list);


// Creation function
const createEl = (todo) => {
  const task = document.createElement("li");
  task.textContent = todo;
  list.appendChild(task);
};


// GET
const getTodos = () => 
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((todoList) => {
      for (const todo of todoList.slice(0, 10)) {
        createEl(todo.title);
      }
    });

getTodos();


// POST
button.addEventListener("click", createTodo);

const createTodo =  () => {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title: input.value,
      user: 1,
      completed: false,
    }),
  }).then((res) => {
    if (input.value !== "") createEl(input.value);
  });
};


// PATCH
const todos = document.getElementsByTagName("li");
console.log(todos);

for (let i = 0; i < todos.length; i++) {
  todos[i].addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "PATCH",
      body: JSON.stringify({
        title: input.value,
      }),
    });
  });
}

// DELETE
const deleteBtns = document.getElementsByClassName("delete-btn");
console.log(deleteBtns);

for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("dbclick", (e) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "DELETE",
    });
  });
}
