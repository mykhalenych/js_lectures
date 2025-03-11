//------------------------Змінні--------------------------------------

var oldWay = "Це застарілий спосіб";
let modernWay = "Рекомендований для змінних";
const constantValue = "Ця змінна не змінюється";

// Хостинг

console.log(x); // undefined
var x = 5;
console.log(x); // 5

// console.log(y); // ReferenceError
let y = 10;
console.log(y);

// Область видимості

// Блочна
if (true) {
    var a = "var змінна";
    let b = "let змінна";
    const c = "const змінна";
}
console.log(a); // "var змінна"
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// Функціональна
const getResult = () => {
    var num = 1;
    return num + 1
};
//console.log(num) // ReferenceError: Cannot access 'num' before initialization

// Переприсвоєння змінних

var x = 10;
var x = 20; // Можна змінити значення
console.log(x);

let yy = 30;
yy = 40; // Можна змінити значення
console.log(yy);

const z = 50;
// z = 60; // TypeError: Assignment to constant variable

//------------------------Типи даних----------------------------------

// Boolean

let isJavaScriptFun = true;
let isLearningHard = false;
console.log(typeof isJavaScriptFun,isJavaScriptFun, isLearningHard); // "boolean", true, false

// String

let singleQuotes = 'Одинарні " лапки';
let doubleQuotes = "Подвійні ' лапки";
let templateString = `Шаблонний рядок із змінною: " ' ${doubleQuotes}`;
console.log(typeof templateString, templateString); // "string"

// Number

let integer = 42;
let float = 3.14;
let notANumber = NaN;
let infinityValue = Infinity;
console.log(typeof integer, typeof float, typeof notANumber, typeof infinityValue);

// BigInt

let bigNumber = 9007199254740991n; // Додаємо "n" в кінці
console.log(typeof bigNumber, bigNumber); // "bigint"

// Symbol

let uniqueKey = Symbol("id");
let anotherKey = Symbol("id");
console.log(uniqueKey === anotherKey, uniqueKey, anotherKey); // false (символи унікальні)

// Null

let emptyValue = null;
console.log(typeof emptyValue, emptyValue); // "object" (це історична помилка в JS)

// Undefined

let notAssigned;
console.log(typeof notAssigned, notAssigned); // "undefined"

// Object

const person = {
    name: 'Max',
    age: 30,
    married: true
};

console.log(typeof person); // "object"

// неявне перетворення типів

const bool = Boolean(1);
const anotherBool = Boolean(NaN)

console.log(bool, anotherBool)

let num = '123'
console.log(typeof +num, typeof num)

let str = `${num}`

console.log(typeof num, typeof str)


//------------------------Перевірка типів-----------------------------

console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (історична помилка)
console.log(null === null)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 9007199254740991n); // "bigint"


//------------------------Курйозні ситуації---------------------------

// Математичні операції з рядками і числами
console.log("5" + 3); // "53" (рядок)
console.log(5 + 5 + "3"); // "103"
console.log("5fsdfn" - 3); // 2 NaN
console.log("5" * 3); // 15
console.log("5" / 3); // 1.6666...

// Ділення на 0

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

// NaN

console.log("Hello" - 5); // NaN
console.log(NaN + 1); // NaN
console.log(typeof NaN); // "number"

// BigInt

console.log(5n + 3n); // 8n (BigInt працює тільки з BigInt)
//console.log(5n + 3); // TypeError

console.log(0.1 + 0.2);
console.log(0.3 === 0.1 + 0.2);

//------------------------Порівняння----------------------------------

console.log(0 == "0"); // true (рядок "0" перетворюється в число)
console.log(0 == false); // true
console.log("" == false); // true
console.log(null == undefined); // true

console.log(0 === "0"); // false (різні типи)
console.log(null === undefined); // false (різні типи)
console.log(0 === false) // false

//------------------------Оператори-----------------------------

let num1 = 3;
let anotherNum = 3;

console.log(num1 != anotherNum)


console.log(test || 'var undefined')
var test = "Це застарілий спосіб";

//------------------------if esle-----------------------------

let num2 = 3;

if (num2 < 2) {
    console.log('if');
} else {
    console.log('else')
}


//------------------------switch-------------------------------
switch (true) {
    case typeof num1 === 'number':
        console.log('number');
        break;
    case typeof num1 !== 'boolean':
        console.log('boolean');
        break;
    default:
        console.log('default');
        break;
}


let num3 = 2;

switch (num3) {
    case 2:
        alert( '2' );
        break;
    case 4:
        alert( 'Точнісінько!' );
        break;
    case 5:
        alert( 'Забагато' );
        break;
    default:
        alert( 'Я не знаю таких значень' );
}
