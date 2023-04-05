(function () {
  const title = document.createElement("h1");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const list = document.createElement("ul");

  let tasks;

  const init = () => {
    title.textContent = "Lista della spesa";
    button.textContent = "+";

    document.body.appendChild(title);
    document.body.appendChild(input);
    document.body.appendChild(button);
    document.body.appendChild(list);

    button.addEventListener("click", addTodo);

    loadAndCreateTasks();
  };

  const getTasksFromLocalStorage = () => {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  };

  const updateTasks = (updatingFn) => {
    tasks = updatingFn(tasks);
    saveTasksToLocalStorage();
  };

  const createTask = (text) => {
    const newTask = document.createElement("li");
    newTask.textContent = text;
    list.appendChild(newTask);

    addCompletionStyle(newTask);

    const toggleCompletion = () => {
      newTask.classList.toggle("completed");
      updateTasks((tasks) =>
        tasks.map((task) => {
          if (task.name === newTask.innerHTML) task.checked = !task.checked;
          return task;
        })
      );
    };

    const remove = () => {
      newTask.remove();
      updateTasks((tasks) =>
        tasks.filter((task) => task.name !== newTask.innerHTML)
      );
    };

    newTask.addEventListener("click", toggleCompletion);
    newTask.addEventListener("dblclick", remove);
  };

  const addTodo = () => {
    if (input.value.trim() !== "") {
      updateTasks((tasks) =>
        tasks.concat({
          name: input.value,
          checked: false,
        })
      );

      createTask(input.value);

      input.value = "";
    }
  };

  function loadAndCreateTasks() {
    document.addEventListener("DOMContentLoaded", () => {
      getTasksFromLocalStorage();

      tasks.forEach((savedTaskText) => {
        createTask(savedTaskText.name);
      });
    });
  }

  function addCompletionStyle(item) {
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

  function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  init();
})();
