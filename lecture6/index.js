//------------------------DOM-------------------------------------

// DOM (Document Object Model) — це об'єктна модель HTML-документа, яка дозволяє JS взаємодіяти з HTML-структурою
// console.log(document.body); // доступ до тіла документа
//
// // BOM (Browser Object Model) — це об'єкти, які надає браузер: window, history, location, navigator, alert тощо
// console.log(navigator); // інформація про браузер
// console.log(location.href); // поточна URL-адреса
//
// // window — глобальний об'єкт у браузері, через який можна отримати доступ до DOM та BOM
// console.log(window.document === document); // true
//alert("Вікно сповіщення через window.alert");

//------------------------Пошук по селекторах-------------------------------------

const title = document.getElementById("main-title");
const secondTitle = document.querySelector("#main-title");
const button = document.querySelector(".theme-toggle");
const byTag = document.getElementsByTagName("h1")[0];
const byClass = document.getElementsByClassName("theme-toggle")[0];
const byQuery = document.querySelector('[data-test="test"]');

Array.from(button).map((item) => {
    console.log(item)
});
// console.log(byTag);     // <h1>...
// console.log(byClass);   // <button>...
// console.log(byQuery);   // працює, оскільки body має клас light

//------------------------Специфічність селекторів------------------------

// ID (#id)       => специфічність: 100
// Клас (.class)  => специфічність: 010
// Тег (div, h1)  => специфічність: 001

// Приклад для аналізу специфічності:
// 1. h1 { color: blue; }          // 001
// 2. .highlight { color: green; } // 010
// 3. #main-title { color: red; }  // 100
// Виграє правило з #main-title

// https://www.w3.org/TR/selectors-3/#specificity

//------------------------Маніпуляції з стилями------------------------

const updateTheme = () => {
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    console.log(document);
    // Маніпуляція властивістю елемента
    title.textContent = `Тема: ${newTheme === "light" ? "Світла" : "Темна"}`;
    secondTitle.textContent = `Тема: ${newTheme === "light" ? "Темна" : "Світла"}`;
    // --- Маніпуляція атрибутами ---
    button.setAttribute("data-theme", newTheme);
};

//------------------------Події------------------------------------------------

button.addEventListener("click", updateTheme);

// Видалення події (приклад)
// button.removeEventListener("click", updateTheme);

const handleMouseOver = () => {
    console.log("Навели мишу на кнопку");
    button.textContent = "Навели!";
    button.removeEventListener("mouseout", handleMouseOver)
};

button.addEventListener("mouseout", handleMouseOver);

button.addEventListener("mouseout", () => {
    console.log("Миша покинула кнопку");
    button.textContent = "Змінити тему";
});

button.addEventListener("mousedown", () => {
    console.log("Натиснули кнопку миші");
});

button.addEventListener("mouseup", () => {
    console.log("Відпустили кнопку миші");
});

let num = 0;

document.addEventListener("mousemove", (e) => {
    num++;
    console.log(num);
    console.log(`Миша рухається: X=${e.clientX}, Y=${e.clientY}`);
});
