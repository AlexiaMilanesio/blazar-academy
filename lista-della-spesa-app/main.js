const title = document.createElement("h1");
const input = document.createElement("input");
const button = document.createElement("button");
const list = document.createElement("ul");

let tasks;
let taskId = 0;

title.textContent = "Lista della spesa";
button.textContent = "+";

document.body.appendChild(title);
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(list);

const getListItems = () => {
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

  const li = getListItems();

  for (const item of li) {
    item.addEventListener("click", () => {
      // COMPLETED TASK
      // Marked as completed
      item.classList.toggle("completed");
      // Update checked value in tasks array
      tasks = tasks.map((task) => {
        if (task.name === item.innerHTML) task.checked = !task.checked;
        return task;
      });

      saveTasksToLocalStorage();
    });
    
    item.addEventListener('dblclick', () => {
      // Remove from DOM
      item.parentNode.removeChild(item);
      // Remove from tasks array
      tasks = tasks.filter((task) => task.name !== item.innerHTML);
      
      saveTasksToLocalStorage();
    })
  }
});

window.addEventListener("load", () => {
  const li = getListItems();

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

    saveTasksToLocalStorage();
    // Reload page
    // TODO: come migliorare questo?
    location.reload(); 
    // Update DOM
    renderTodo(input.value); 

    input.value = "";
  }
};

button.addEventListener("click", addTodo);
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

