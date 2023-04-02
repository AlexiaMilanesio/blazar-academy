const title = document.createElement("h1");
const table = document.createElement("table");

title.textContent = "Lista degli utenti";
let data;
let usersValues;

document.body.appendChild(title);
document.body.appendChild(table);


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
}

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
}

// Get users
async function getUsers () {
    let allUsers;

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    allUsers = users.map(user => {
        return {
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
        }
    })

    data = Object.keys(allUsers[0]);
    usersValues = Object.values(allUsers);
    // console.log(data);
    // console.log(usersValues);

    generateTableHead(table, data);
    generateTable(table, usersValues);

    return allUsers;
}

getUsers();
