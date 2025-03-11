//------------------------Функції-------------------------------------------------------

// Function Declaration
function greet({name}) {
    return `Привіт, ${name}!`;
}

// Function Expression
const sayHello = function (name) {
    return `Привіт, ${name}!`;
};

// Arrow Function
const sayHi = (name) => `Привіт, ${name}!`;

//console.log(greet({name}), sayHello("Max"), sayHi("Anna"));

//------------------------Declaration vs Expression------------------------------

//Хостинг
// console.log(sum(2, 3)); // 5
function sum(a, b) {
    return a + b;
}

//console.log(multiply(2, 3)); // TypeError: multiply is not a function
const multiply = (a, b) => {
    return a * b;
};

console.log(typeof multiply)

//this

//declaration
function showThis() {
    console.log(this);
}

showThis(); // В строгому режимі: undefined, без нього – глобальний об'єкт (window в браузері)

//arrow function

const showArrowThis = () => {
    console.log(this);
};
showArrowThis(); // Наслідує значення `this` від батьківського контексту

//arguments

//declaration
function showArguments() {
    console.log(arguments);
}

showArguments(1, 2, 3); // [1, 2, 3]

//arrow function
const arrowArguments = (...rest) => {
    console.log(rest);
};
arrowArguments(1, 2, 3); // ReferenceError: arguments is not defined

//Лексичне оточення

let a = 1;

if(true) {
    console.log(a, window);

    let b = 2;

    if (b) {
        let c = a + b;
        console.log(c, b)
    }
};

//Замикання

let counter = () => {
    let a = 0;
    return () => {
        a++;
        return a
    }
};

let counter1 = counter();
let counter2 = counter();

console.log(counter1()); //counter1 = 1
console.log(counter2()); //counter2 = 1
console.log(counter1()); //counter1 = 2
console.log(counter1()); //counter1 = 3
console.log(counter2()); //counter2 = 2

//------------------------Цикли---------------------------------------------------------

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let x = 0;
while (true) {
    console.log(x);
    if(x === 10){
        break
        //throw new Error('error')
    }

    x++;
}
let y = 0;
do {
    console.log(y);
    y++;
} while (y < 3);


//------------------------Math in details-----------------------------------------------

console.log(Math)
console.log(Math.round(4.7)); // 5 (Працює по правилах математики)
console.log(Math.floor(4.7)); // 4 (Округлення вниз)
console.log(Math.ceil(4.3)); // 5 (Округлення вгору)
console.log(Math.random()); // випадкове число від 0 до 1
console.log(Math.pow(2, 3)); // 8 (Піднесення до степеня)
console.log(Math.sqrt(25)); // 5 (Квадратний корінь)
console.log(Math.max(10, 20, 30)); // 30 (Максимальне значення)
console.log(Math.min(10, 20, 30)); // 10 (Мінімальне значення)
console.log(Math.trunc(4.9)); // 4 (Відкидає десяткову частину)

//------------------------String in details---------------------------------------------

let text = "JavaScript"

console.log(text.length); // 10 (Довжина рядка)
console.log(text.toUpperCase()); // "JAVASCRIPT" (Перетворення в верхній регістр)
console.log(text.toLowerCase()); // "javascript" (Перетворення в нижній регістр)
console.log(text.includes("Script")); // true (Перевірка наявності підрядка)
console.log(text.startsWith("Java")); // true (Перевірка початку рядка)
console.log(text.endsWith("Script")); // true (Перевірка закінчення рядка)
console.log(text.slice(0, 4)); // "Java" (Витяг частини рядка)
console.log(text.substring(0, 4)); // "Java" (Альтернативний метод вирізання)
console.log(text.replace("Java", "ECMA")); // "ECMAScript" (Замінює підрядок)
console.log(text.split("a")); // ["J", "v", "Script"] (Розділення рядка)
console.log("   Hello   ".trim()); // "Hello" (Видалення пробілів спереду і ззаду)

for (let i = 0; i < text.length; i++) {
    console.log(text[i], i);
}

// Задача: перевернути рядок

const reverseString = (str) => {
  //  return str.split('').reverse().join('')

    let newStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }

    return newStr
};

console.log(reverseString("hello")); // ""


// Задача: Перевірити чи строка пуста

const checkIfStringEmpty = (str) => {
    return !Boolean(str.trim().length)

};
console.log(checkIfStringEmpty(" "));


// Задача: Видалити пробіли з рядка

const removeSpaces = (str) => {
    // let newStr = '';
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] !== ' ') {
    //         newStr += str[i]
    //     }
    // }
    // return newStr
};
console.log(removeSpaces("  Hello   world  "));
