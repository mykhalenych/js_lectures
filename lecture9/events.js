export function setupEventDelegation() {
    const container = document.querySelector(".container");
    container.addEventListener("click", (e) => {
        if (e.target.matches("button")) {
            alert("Кнопка натиснута");

        }
    });

    document.body.addEventListener("click", () => {
        console.log("Клік по body (всплиття)");
    });

    container.addEventListener("click", (e) => {
        console.log("Занурення у container");
    }, true); // capture phase
}

