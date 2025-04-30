// gc.js

// ❌
let counter = 0;

function startGlobalCounter() {
    setInterval(() => {
        counter++;
        console.log("Global counter:", counter);
    }, 1000);
}

// ✅
function startScopedCounter() {
    let counter = 0;
    const intervalId = setInterval(() => {
        counter++;
        console.log("Scoped counter:", counter);
        if (counter > 5) clearInterval(intervalId); // очищення таймера
    }, 1000);
}

// ❌
function attachGlobalHandler() {
    document.body.addEventListener("click", () => {
        console.log("Глобальний обробник кліку");
    });
}

// ✅
function attachAndRemoveHandler() {
    const handler = () => console.log("Тіло натиснули!");
    document.body.addEventListener("click", handler);

    // автоматичне видалення після 5 секунд
    setTimeout(() => {
        document.body.removeEventListener("click", handler);
        console.log("Обробник видалено");
    }, 500);
}

export {startGlobalCounter, startScopedCounter, attachGlobalHandler, attachAndRemoveHandler};
