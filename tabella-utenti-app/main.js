const title = document.createElement("h1");
const table = document.createElement("table");
const arrow = document.createElement("span");
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const input3 = document.createElement("input");
const input4 = document.createElement("input");
const button = document.createElement("button");
const subtitle = document.createElement("h2");

const td = document.querySelector("td");

let data;
let usersValues;

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



// Generate table head
const generateTableHead = (table, data) => {
  let thead = table.createTHead();
  let row = thead.insertRow();

  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
};



// Generate table content
const generateTable = (table, data) => {
  for (let element of data) {
    let row = table.insertRow();

    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
};



// Get users
async function getUsers() {
  let allUsers;

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  allUsers = users.map((user) => {
    return {
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
    };
  });

  data = Object.keys(allUsers[0]);
  usersValues = Object.values(allUsers);

  generateTableHead(table, data);
  generateTable(table, usersValues);

  return allUsers;
}


getUsers();



// POST
const createUser = (newUser) => {
  const t = document.querySelector("table");
  let row = t.insertRow();

    for (let key in newUser) {
      let cell = row.insertCell();
      let text = document.createTextNode(newUser[key]);
      cell.appendChild(text);
    }
}


button.addEventListener("click", () => {
  console.log("Click registrado")
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      name: input1.value,
      username: input2.value,
      email: input3.value,
      phone: input4.value,
    }),
  }).then((res) => {
    if (res.ok) {
      if (input1.value !== "" && input2.value !== "" && input3.value !== "" && input4.value !== "") {
        createUser({
          name: input1.value, 
          username: input2.value, 
          email: input3.value, 
          phone: input4.value
        });
      };
    }
  });
});




// DELETE
// td.addEventListener("click", () => {
//   confirm(
//     "You are trying to delete a user, are you sure you want to continue?"
//       ? Yes
//       : No
//   );
//   if (Yes) {
//     alert("User deleted successfully");
//   }
// });
