//------------------------DOM-------------------------------------

const todoList = document.querySelector(".todo-list");

//------------------------обробка через форму + JS валідація------------------------

const form = document.querySelector(".todo-form");
const errorElement = form.querySelector(".error");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(form.elements.task);
    const task = form.elements.task.value.trim();
    console.log(typeof form.elements.task.value);
    if (!task) {
        errorElement.textContent = "Поле не може бути порожнім.";
        return;
    }

    if (task.length < 3) {
        errorElement.textContent = "Довжина поля не може бути менше або рівна двом символам";
        return;
    }

    errorElement.textContent = "";
    addTodo(task);
    form.reset();
});

//------------------------Варіант 2 + HTML5 валідація------------------------

const altInput = document.getElementById("alt-task");
const altButton = document.getElementById("alt-add");

altButton.addEventListener("click", () => {
    if (!altInput.checkValidity()) {
        altInput.reportValidity();
        return;
    }

    const task = altInput.value.trim();
    addTodo(task);
    altInput.value = "";
});


//------------------------Додавання елемента------------------------

function addTodo(text) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
        <span class="task-text">${text}</span>
        <div>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;
    todoList.appendChild(li);
}


//------------------------Події  інпутів------------------------

const input = document.querySelector("#alt-task");

input.addEventListener("keydown", e => console.log("keydown:", e.key));
input.addEventListener("keyup", e => console.log("keyup:", e.key));
input.addEventListener("keypress", e => console.log("keypress:", e.key));
//
input.addEventListener("focus", () => {
    input.style.border = "5px solid red";
});
input.addEventListener("blur", () => {
    input.value = ""
});
input.addEventListener("change", (e) => {
    console.log(e.target.value, typeof (+e.target.value));
    if (e.target.value.length > 3) {
        console.log(1);
        input.value = e.target.value;
        return
    }

    input.value = ""
});

//------------------------Делегація подій------------------------

todoList.addEventListener("click", (e) => {
    const item = e.target.closest(".todo-item");
    if (!item) return;

    if (e.target.classList.contains("delete")) {
        item.remove();
    }

    if (e.target.classList.contains("edit")) {
        const textEl = item.querySelector(".task-text");
        const newText = prompt("Edit task:", textEl.textContent);
        if (newText !== null && newText.trim() !== "") {
            textEl.textContent = newText.trim();
        }
    }
});
