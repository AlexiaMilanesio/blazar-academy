const title = document.createElement("h1");
const table = document.createElement("table");
const input = document.createElement("input");// Form + POST
const button = document.createElement("button");// Form + POST

const td = document.querySelector("td");

let data;
let usersValues;

title.textContent = "List of users";
button.textContent = "Add user";

document.body.appendChild(title);
document.body.appendChild(table);
document.body.appendChild(input);// Form + POST
document.body.appendChild(button);// Form + POST

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


td.addEventListener("click", () => {
    confirm("You are trying to delete a user, are you sure you want to continue?" ? Yes : No)
    if (Yes) {
        alert("User deleted successfully");
    }
})


// Form - post call
// /**
//  * sends a request to the specified url from a form. this will change the window location.
//  * @param {string} path the path to send the post request to
//  * @param {object} params the parameters to add to the url
//  * @param {string} [method=post] the method to use on the form
//  */

// function post(path, params, method = "post") {
//   const form = document.createElement("form");
//   form.method = method;
//   form.action = path;

//   for (const key in params) {
//     if (params.hasOwnProperty(key)) {
//       const hiddenField = document.createElement("input");
//       hiddenField.type = "hidden";
//       hiddenField.name = key;
//       hiddenField.value = params[key];

//       form.appendChild(hiddenField);
//     }
//   }

//   document.body.appendChild(form);
//   form.submit();
// }
