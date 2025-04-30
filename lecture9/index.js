//------------------Network requests-------------------------------------

const form = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const input = form.elements.task;
const errorDiv = document.getElementById("error");

let todos = [];

document.addEventListener("DOMContentLoaded", async () => {
    // const result = fetch('https://5e64c3daa49c210016106bc4.mockapi.io/tasks').then((res) => {
    //     console.log(res);
    //     if (res.ok) {
    //         return res.json()
    //     } else {
    //         throw new Error("Network response was not ok")
    //     }
    // }).then((r) => {
    //     if (r) {
    //         todos = r;
    //         renderTodos();
    //     }
    // }).catch((err) => {
    //     console.error(err)
    // });
    const spinner = document.getElementById("spinner");
    spinner.className = 'spinner';
    try {
        const result = await fetch('https://5e64c3daa49c210016106bc4.mockapi.io/list');
        // const result = await fetch('https://5e64c3daa49c210016106bc4.mockapi.io/list/1');
        if (result.ok) {
            const res = await result.json();
            if (res) {
                todos = res;
                renderTodos();
            }
        } else {
            throw new Error("Network response was not ok")
        }
    } catch (err) {
        console.error(err)
    } finally {
        spinner.remove()
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
    const date = new Date();
    const newTodo = {text, id: date.toString()};
    todos.push(newTodo);
    saveTodos();
    form.reset();
});

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(({id, text}) => {
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
    fetch('https://5e64c3daa49c210016106bc4.mockapi.io/list', {
        method: 'POST',
        body: JSON.stringify(todos),
    }).then((res) => {
        console.log(res);
        if (!res.ok) {
            throw new Error('Create error')
        } else {
            res.json();
            renderTodos()
        }
    }).catch((err) => {
        console.error(err)
    })
}

todoList.addEventListener("click", (e) => {
    const id = e.target.closest(".todo-item")?.dataset.id;
    if (e.target.classList.contains("delete")) {
        todos = todos.filter(todo => todo.id !== id);
        fetch(`https://5e64c3daa49c210016106bc4.mockapi.io/list/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (!res.ok) {
                throw new Error('Delete error')
            } else {
                renderTodos()
            }
        }).catch((err) => {
            console.error(err)
        })

    }

    if (e.target.classList.contains("edit")) {
        const current = todos.find(todo => +todo.id === +id);
        const newText = prompt("Edit task:", current.text);
        if (newText) {
            current.text = newText.trim();
            fetch(`https://5e64c3daa49c210016106bc4.mockapi.io/list/${id}`, {
                method: 'PUT',
                body: JSON.stringify(current),
            }).then((res) => {
                if (!res.ok) {
                    throw new Error('Edit error')
                } else {
                    renderTodos()
                }
            }).catch((err) => {
                console.error(err)
            })

        }
    }
});

//--------modules + bubling/cupturing + garbarge collector

import {setupEventDelegation} from "./events.js";
import {
    startGlobalCounter,
    startScopedCounter,
    attachGlobalHandler,
    attachAndRemoveHandler
} from "./garbageCollector.js";

document.addEventListener("DOMContentLoaded", () => {
    setupEventDelegation();
    //startGlobalCounter();
    //startScopedCounter();

    //attachGlobalHandler();
    //attachAndRemoveHandler()
});
