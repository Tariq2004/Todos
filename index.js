// making the placeholder = the date of the current day:
const input = document.querySelector(".input");
const todo = document.querySelector(".todo");
const valuee = input.value;

const date = new Date().toLocaleDateString("en-Us", {
  day: "numeric",
  month: "short",
  year: "2-digit",
});
const button = document.querySelector(".addButton");

input.setAttribute("placeholder", "Insert a todos for: " + date);

let count = 1;
let todos = [];

button.addEventListener("click", () => {
  const h3 = document.createElement("h3");
  h3.innerText = count++ + "- " + input.value;
  todo.appendChild(h3);

  todo.classList.add("trial");

  todos.push(input.value);

  input.value = "";

  h3.addEventListener("click", () => {
    h3.classList.add("to");
  });
  console.log(todos);

  h3.addEventListener("dblclick", () => {
    todo.removeChild(h3);
  });
});
