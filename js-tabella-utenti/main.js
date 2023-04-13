(function () {
  const title = document.createElement("h1");
  const table = document.createElement("table");
  const arrow = document.createElement("span");
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  const input3 = document.createElement("input");
  const input4 = document.createElement("input");
  const button = document.createElement("button");
  const subtitle = document.createElement("h2");

  const URL = "https://jsonplaceholder.typicode.com/users";

  let usersKeys;
  let usersValues;

  const init = () => {
    title.textContent = "List of users";
    arrow.textContent = "↓";
    subtitle.textContent = "Add a new user";
    button.textContent = "Add user";
    input1.placeholder = "Enter user's name";
    input2.placeholder = "Enter user's username";
    input3.placeholder = "Enter user's email";
    input4.placeholder = "Enter user's phone";

    document.body.appendChild(title);
    document.body.appendChild(table);
    document.body.appendChild(arrow);
    document.body.appendChild(subtitle);
    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(input3);
    document.body.appendChild(input4);
    document.body.appendChild(button);

    button.addEventListener("click", addUser);

    getUsers();
  };

  // Generate table head
  const generateTableHead = (table, usersKeys) => {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of usersKeys) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  };

  // Generate table content
  const generateTable = (table, usersKeys) => {
    for (let user of usersKeys) {
      let row = table.insertRow();

      for (let key in user) {
        let cell = row.insertCell();
        let text = document.createTextNode(user[key]);
        cell.appendChild(text);
      }
    }
  };

  const getUsers = async () => {
    let allUsers;

    const response = await fetch(URL);
    const users = await response.json();

    allUsers = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        deleteBtn: "x",
      };
    });

    usersKeys = Object.keys(allUsers[0]);
    usersValues = Object.values(allUsers);
    // console.log("usersKeys:" + usersKeys); // borrar
    // console.log("usersValues:" + usersValues); // borrar

    generateTableHead(table, usersKeys);
    generateTable(table, usersValues);
    generateDeleteBtns(table, usersValues);

    return allUsers;
  };

  const createUser = (newUser) => {
    const t = document.querySelector("table");
    let row = t.insertRow();

    for (let key in newUser) {
      let cell = row.insertCell();
      let text = document.createTextNode(newUser[key]);
      cell.appendChild(text);
    }
  };

  const addUser = () => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        name: input1.value,
        username: input2.value,
        email: input3.value,
        phone: input4.value,
      }),
    }).then((res) => {
      if (res.ok) {
        if (
          input1.value !== "" &&
          input2.value !== "" &&
          input3.value !== "" &&
          input4.value !== ""
        ) {
          createUser({
            id: 11, // hard-coding for now - NOT FINISHED
            name: input1.value,
            username: input2.value,
            email: input3.value,
            phone: input4.value,
            deleteBtn: "x",
          });
        }
      }
    });
  };

  // NOT FINISHED
  const deleteUser = (e) => {
    console.log("Deleted btn clicked!" + e.target.body); // borrar

    // fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((user) => console.log("Deleted user: " + user.name));
  };

  const generateDeleteBtns = () => {
    const td = document.querySelectorAll("td");

    Array.from(td).forEach((item) => {
      if (item.innerHTML === "x") {
        item.addEventListener("click", (e) => deleteUser(e));
      }
    });
  };


  
  init();
})();
