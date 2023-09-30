const app = document.getElementById("app");
const app1 = document.getElementById("app-1");
const worcks = [
  { title: "burger", price: 123 },
  { title: "pizza", price: 43 },
  { title: "soda", price: 23 },
];

worcks.forEach((element) => {
  app.innerHTML += `<li>
        ${element.title} - ${element.price}
    </li>`;
});
const fruits = ["pina", "sandia", "mago", "pera"];
for (let index = 0; index < fruits.length; index++) {
  const element = fruits[index];
  console.log("for", element);
}
fruits.forEach((item) => console.log("forEach", item));

const tasks = [
  { title: "make dinner", done: false },
  { title: "sweep the floor", done: true },
  { title: "feed the kittens", done: true },
  { title: "buy groceries", done: false },
  { title: "take a bath", done: true },
];

tasks.forEach(({ title, done }) => {
  const element = `
    <li>
        <input type='checkbox'  ${done && "checked"} />
        <label for='${title}'>${title}</label>   
    </li>`;
  app1.insertAdjacentHTML("beforeend", element);
});

// Obtener el elemento UL donde se agregarán las tareas
const taskList = document.getElementById("taskList");

// Iterar sobre el array tasks y crear elementos LI con checkboxes
tasks.forEach((task) => {
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;

  // Agregar el título de la tarea como texto dentro del LI
  listItem.textContent = task.title;

  // Agregar el checkbox y el LI a la lista de tareas
  listItem.appendChild(checkbox);
  taskList.appendChild(listItem);

  // Escuchar el evento "change" del checkbox para actualizar el estado de la tarea
  checkbox.addEventListener("change", () => {
    task.done = this.checked;
  });
});
