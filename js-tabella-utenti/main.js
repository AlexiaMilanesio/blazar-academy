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

    generateTableHead(table, usersKeys);
    generateTable(table, usersValues);
    generateDeleteBtns();

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

  const addUser = async () => {
    await fetch(URL, {
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
            id: 11, // hard-coding for now
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


  const deleteUser = async (id) => {
    let confirmDelete = confirm("Are you sure you want to delete this user?")
    if (!confirmDelete) return;

  

    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    })
      .then(res => {
        console.log(res);
        if (!res.ok) {
          throw new Error("User could not be deleted");
        }
        else {
          /* provvisorio */
          const trow = document.querySelectorAll("tr");
          Array.from(trow).map(tr => {
            Array.from(tr.children).map(child => {
              if (child.innerHTML === id) {
                tr.remove();
              }
            })
          })
          /* ********** */
          console.log("User deleted succesfully");
        }
      })
      .catch (error => console.log(error));
  };

  
  const generateDeleteBtns = () => {
    const td = document.querySelectorAll("td");

    let id = 0;

    Array.from(td).forEach((item) => {
      if (item.innerHTML === "x") {
        item.setAttribute("id", ++id);
        item.addEventListener("click", () => deleteUser(item.id));
      }
    });
  };


  // const updateUser = (id) => {
  //   fetch(`${URL}/${id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({
  //       id: 1,
  //       title: 'foo',
  //       body: 'bar',
  //       userId: 1,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((res) => resporesnse.json())
  //     .then((user) => console.log(user));
  // }



  init();
})();
