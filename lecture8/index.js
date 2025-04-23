//------------------DOMContentLoaded + local/session storages-------------------------------------

const form = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const input = form.elements.task;
const errorDiv = document.getElementById("error");

let todos = [];

document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("todos");
    if (saved) {
        todos = JSON.parse(saved);
        renderTodos();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();

    if (!text) {
        errorDiv.textContent = "Task cannot be empty.";
        return;
    }

    errorDiv.textContent = "";
    const newTodo = { id: Date.now(), text };
    todos.push(newTodo);
    saveTodos();
    renderTodos();
    form.reset();
});

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(({ id, text }) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.dataset.id = id;
        li.innerHTML = `
          <span>${text}</span>
          <div class="todo-actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
        `;
        todoList.appendChild(li);
    });
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

todoList.addEventListener("click", (e) => {
    const id = Number(e.target.closest(".todo-item")?.dataset.id);
    if (e.target.classList.contains("delete")) {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
    }

    if (e.target.classList.contains("edit")) {
        const current = todos.find(todo => todo.id === id);
        const newText = prompt("Edit task:", current.text);
        if (newText) {
            current.text = newText.trim();
            saveTodos();
            renderTodos();
        }
    }
});


