const title = document.createElement("h1");
const input = document.createElement("input");
const button = document.createElement("button");
const list = document.createElement("ul");

let tasks;
let taskId = 0;
let clickCount = 0;

title.textContent = "Lista della spesa";
button.textContent = "+";

document.body.appendChild(title);
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(list);

const getLi = () => {
  return Array.from(document.querySelectorAll("li"));
};

// Retrive tasks from
localStorage;
const getTasksFromLocalStorage = () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
};

// RENDER TASKS
const renderTodo = (text) => {
  const newTask = document.createElement("li");
  newTask.textContent = text;
  list.appendChild(newTask);
};

// When page loads get tasks from local storage and create them
document.addEventListener("DOMContentLoaded", () => {
  getTasksFromLocalStorage();

  tasks.forEach((savedTaskText) => {
    renderTodo(savedTaskText.name);
  });

  const li = getLi();

  for (const item of li) {
    item.addEventListener("click", () => {
      clickCount++;

      // COMPLETED TASK
      if (clickCount === 1) {
        // Marked as completed
        item.classList.toggle("completed");
        // Update checked value in tasks array
        tasks = tasks.map((task) => {
          if (task.name === item.innerHTML) task.checked = !task.checked;
          return task;
        });
        // Update local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        setTimeout(() => (clickCount = 0), 300);
      }

      // DELETE TASK
      else if (clickCount === 2) {
        // Remove from DOM
        item.parentNode.removeChild(item);
        // Remove from tasks array
        tasks = tasks.filter((task) => task.name !== item.innerHTML);
        // Remove from/update local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        clickCount = 0;
      }
    });
  }
});

window.addEventListener("load", () => {
  const li = getLi();

  for (const item of li) {
    tasks.map((task) => {
      if (task.name === item.innerText) {
        if (task.checked) {
          item.classList.add("completed");
        } else if (!task.checked) {
          if (item.classList.contains("completed"))
            item.classList.remove("completed");
        }
      }
    });
  }
});

// ADD-CREATE NEW TASK
const addTodo = () => {
  if (input.value !== "" && input.value !== " ") {
    tasks.push({
      name: input.value,
      checked: false,
    });

    // Save to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // Reload page
    location.reload();
    // Update DOM
    renderTodo(input.value.name);

    input.value = "";
  }
};

button.addEventListener("click", addTodo);
