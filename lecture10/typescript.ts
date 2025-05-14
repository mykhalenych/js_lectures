//------------------Typescript-------------------------------------

// Types

let username: string = "Alice";
let age: number = 30;
let isActive: boolean = true;

// Додаткові типи

//any Вимикає типізацію повністю — будь-яке значення дозволене.
let value: any = 5;
value = "текст";

// unknown Безпечна альтернатива `any`: потрібно перевірити тип перед використанням.

let input: unknown = "дані";
if (typeof input == "string") {
    console.log(input.toUpperCase());
}

// void Тип, що вказує на відсутність поверненого значення у функціях

function logMessage(msg: string): void {
    console.log(msg);
}

// never Ніколи не завершується або завжди кидає помилку

function throwError(): never {
    throw new Error("Fatal error");
}

// Interfaces

interface User {
    name: string;
    age: number;
    isActive: boolean;
}

const user: User = {
    name: "Alice",
    age: 30,
    isActive: true
};


// Union, Intersection, Tuples

let id: string | number;
id = "abc123"; // допустимо
id = 12345;    // також допустимо

interface Employee {
    name: string;
    role: string;
}

interface Contact {
    phone: string;
    email: string;
}

type EmployeeWithContact = Employee & Contact;

const employee: EmployeeWithContact = {
    name: "Bob",
    role: "Manager",
    phone: "123-456-789",
    email: "bob@example.com"
};

let point: [number, number, undefined] = [10, 20, undefined];

let data: [string, number] = ["10", 20];

// Generics

function identity<T>(arg: T): T {
    return arg;
}

let result = identity("Hello"); // result має тип string
let result2 = identity(100);

// Enums

enum Color {
    red = 'red',
    green = 'green',
    blue = 'blue'
}

let c: Color = Color.red;
console.log(c);
