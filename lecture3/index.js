//------------------------Об'єкти------------------------------------------------

//------------------------Способи створення об'єкта------------------------------------------------

// Літерал об'єкта

const person = {
    name: "John",
    age: 30
};

// Конструктор Object

const person2 = new Object();
person2.name = "Alice";
person2.age = 25;

// Функція-конструктор

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person3 = new Person("Bob", 40);

// Створення об'єкта з прототипом

const personProto = {
    greet() {
        console.log("Hello" + " " + this.name);
    }
};
const person4 = Object.create(personProto);
person4.name = "Max";
console.log(person4.greet(), person3, person2, person);

//------------------------Відмінність між примітивними типами та об'єктами------------------------------------------------

let num = 10;
let num2 = num;
num2 = 20;
console.log(num); // 10 (не змінилось)

let obj1 = {num: 10};
let obj2 = obj1;
obj2.num = 20;
console.log(obj1.num, obj1, obj2); // 20 (змінилося, бо obj2 посилається на obj1)

// Reference Type, array & function

const arr = [1, 2, 3];
console.log(typeof arr); // "object"

function greet() {
    console.log("Hello");
}

console.log(typeof greet); // "function" (але об'єктний тип!)

//------------------------Копіювання об'єктів: Shallow Copy vs Deep Copy------------------------------------------------
// Shallow Copy

const original = {a: 1, b: {c: 2}};
const copy = {...original};
copy.b.c = 42;
console.log(original.b.c, copy.b.c); // 42 (глибокі властивості не копіюються)

// Deep Copy

// JSON.stringify + JSON.parse
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 100;
console.log(original.b.c, deepCopy.b.c); // 42 (не змінилось) 100

// Рекурсія

function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) return obj;
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        copy[key] = deepClone(obj[key]);
    }
    return copy;
}

const deepCopy2 = deepClone(original);
deepCopy2.b.c = 200;
console.log(original.b.c, deepCopy2.b.c); // 42 200

// structuredClone

const deepCopy3 = structuredClone(original);
deepCopy3.b.c = 300;
console.log(original.b.c, deepCopy3.b.c); // 42 300
//------------------------This------------------------------------------------

// declaration vs arrow

const obj = {
    name: "Alice",
    showThis() {
        const arrow = () => console.log(this.name);
        arrow();

        function declaration() {
            console.log(this, this.name)
        }

        declaration()

    }
};
obj.showThis(); // `this` успадковується з лексичного оточення (глобальний об'єкт або undefined у strict mode)

// втрата контексту

const user = {
    name: "Bob",
    greet() {
        console.log(this.name);
    }
};
const greetFn = user.greet;
greetFn(); // undefined (this втрачено)

// прив'язка контексту

const boundGreet = user.greet.bind(user);
boundGreet(); // "Bob"

//------------------------Optional chaining ?.------------------------------------------------

const user = {profile: {name: "Alice"}};
console.log(user.profile?.name); // "Alice"
console.log(user.address?.street); // undefined (без помилки!)
console.log(user.address.street); // Uncaught TypeError

//------------------------Методи об'єкта------------------------------------------------

const person = {
    name: "John",
    age: 30,
    toString() {
        return `${this.name}, ${this.age} years old`;
    }
};
console.log(person.toString()); // "John, 30 years old"

console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["John", 30]
console.log(Object.entries(person)); // [["name", "John"], ["age", 30]]

const copy = Object.assign({}, person);
console.log(copy);

//------------------------Перебір об'єкта------------------------------------------------

const person = {name: "Alice", age: 25, city: "New York"};

// for...in
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object.keys
Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});

// Object.entries
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
