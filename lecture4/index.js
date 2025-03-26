//------------------------Масиви------------------------------------------------

// Створення масиву

const fruits = ["apple", "banana", "cherry"]; // літеральний спосіб
const numbers = new Array(1, 2, 3, 4, 5); // конструктор Array
const emptyArray = new Array(5); // Масив з 5 елементами (порожні комірки)
console.log(fruits, numbers, emptyArray);

// Індекси масиву

const colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
console.log(colors[1]); // "green"
console.log(colors[2]); // "blue"


// Призначення та видалення значення по індексу та видалення елемента

const animals = ["cat", "dog", "elephant"];
animals[1] = "wolf";
console.log(animals); // ["cat", "wolf", "elephant"]

const cities = ["Kyiv", "Lviv", "Odessa"];
delete cities[1];
console.log(cities[1])
console.log(cities); // ["Kyiv", undefined, "Odessa"]

//------------------------Копіювання масивів: Shallow Copy vs Deep Copy-------------

// Shallow

const originalArray = [1, 2, [3, [4]]];
console.log(originalArray)
const shallowCopy = [...originalArray];
shallowCopy[2][0] = 99;
console.log(originalArray[2][0]); // 99 (глибока частина не копіюється)

Deep

рекурсія
const originalRecursionArray = [
    { name: "apple", quantity: 5 },
    { name: "banana", quantity: 3, info: { color: "yellow" } },
    [1, 2, 3]
];


function deepClone(arr) {
    const clonedArray = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (Array.isArray(item)) {
            clonedArray.push(deepClone(item));
        }
        else if (typeof item === 'object' && item !== null) {
            clonedArray.push({ ...item, info: { ...item.info } });
        }
        else {
            clonedArray.push(item);
        }
    }

    return clonedArray;
}

const deepRecursionCopy = deepClone(originalRecursionArray);
deepRecursionCopy[1].info.color = "green"; // Змінимо колір у копії
console.log(originalRecursionArray[1].info.color); // "yellow" (не змінилось)
console.log(deepRecursionCopy[1].info.color); // "green"


const deepCopy3 = structuredClone(originalArray);
deepCopy3[2][0] = 300;
console.log(originalArray[2][0]); // 99

//------------------------Мутуючі vs Немутуючі методи----------------------------

// Мутуючі методи (змінюють оригінальний масив)

const numbers = [1, 2, 3];
numbers.push(5); // Додає елемент у кінець
console.log(numbers); // [1, 2, 3, 5]

numbers.pop() // Видаляє останній елемент
console.log(numbers); // [1, 2, 3]
//
numbers.shift(); // Видаляє перший елемент
console.log(numbers); // [2, 3]
//
numbers.unshift(0); // Додає елемент на початок
console.log(numbers); // [0, 2, 3]

numbers.sort(); // Сортує масив (мутує його)
console.log(numbers);

numbers.reverse(); // Реверсує масив (мутує його)
console.log(numbers);


// Немутуючі методи (створюють новий масив)
const numbers = [1, 2, 3, 4, 5];
const cities = ["Kyiv", "Lviv", "Odessa"];

const test =cities.filter((element, index, arr) => {
    console.log(element, index, arr, numbers);
    return false
})
console.log(test)

const newNumbers = numbers.slice(0, 4); // [2, 3, 4]

const doubled = numbers.map(item => item * 2); // [2, 4, 6, 8, 10]
console.log(doubled)
 const filtered = numbers.filter(num => num % 2 === 0); // [2, 4]
console.log(filtered)
const sortedNew = numbers.toSorted(); // [1, 2, 3, 4, 5] (створює новий відсортований масив)

const reversedNew = numbers.toReversed(); // [5, 4, 3, 2, 1] (створює новий реверсований масив)
console.log(reversedNew, numbers)
console.log(numbers); // Оригінал не змінився

//------------------------Популярні методи масивів------------------------------------------------

const squared = numbers.map(num => num ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

const firstEven = numbers.find(num => num % 2 === 11);
console.log(firstEven); // undefined

const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // false

console.log(numbers.includes(3)); // true

const sum = numbers.reduce((accumulator, item) => {
    console.log(accumulator)
    return accumulator + item
}, 0);
console.log(sum)
console.log(sum); // 15

const numbers = [4, 2, 9, 1, 7];
 numbers.sort()
console.log(numbers)
const mixedNumbers = [10, 2, 30, 4];
const sorted = mixedNumbers.sort((a, b) => {
    console.log(a, b)
    return a - b

});
console.log(mixedNumbers, sorted); // [10, 2, 30, 4] (неправильне сортування)

const words = ["b", "a", "c", "A"];

words.sort((a, b) => {
    console.log(a, b)
    return a.localeCompare(b)
});
console.log(words);

numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 4, 7, 9]

// Сортування рядків

const words = ["banana", "apple", "cherry"];
words.sort();
console.log(words); // ["apple", "banana", "cherry"]

// Проблеми зі sort()

const mixedNumbers = [10, 2, 30, 4];
mixedNumbers.sort();
console.log(mixedNumbers); // [10, 2, 30, 4] (неправильне сортування)

mixedNumbers.sort((a, b) => a - b);
console.log(mixedNumbers); // [2, 4, 10, 30]

//------------------------Задачі------------------------------------------------

// Задача 1
// є масив об'єктів, де кожен об'єкт містить інформацію про користувача
// потрібно посортування по зарплаті від нижчої до вищої
const users = [
    {name: "John", age: 28, salary: 5000},
    {name: "Jane", age: 22, salary: 6000},
    {name: "Mark", age: 28, salary: 4500},
    {name: "Alice", age: 30, salary: 7000}
];

// Задача 2
// є масив товарів, кожен товар має ціну та категорію.
// Напишіть функцію, яка відфільтровує товари з категорії "electronics" та множить
// їх ціну на 0.9 (знижка 10%).
// Потім потрібно відсортувати результати за ціною від найвищої до найнижчої.
const products = [
    {name: "Laptop", price: 1500, category: "electronics"},
    {name: "Shirt", price: 40, category: "clothing"},
    {name: "Smartphone", price: 800, category: "electronics"},
    {name: "Shoes", price: 60, category: "clothing"}
];

const sortByPrice = (array) => {
    const copy = [...array];
    return copy.filter((item) => item.category === "electronics").sort((a, b) => b.price - a.price).map((item) => ({
            ...item,
            price: item.price * 0.9
        })
    )
};

console.log(sortByPrice(products));

// Задача 3
//  є масив чисел, який містить як позитивні, так і негативні числа.
//  Напишіть функцію, яка фільтрує тільки позитивні числа та обчислює
//  їх середнє значення.
//const numbers = [-10, 25, 50, -5, 60, 10];

// Задача 4
// потрібно створити функцію яка приймає масив і повертає новий масив,
// що містить лише унікальні елементи.
const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 1];

const getUninqNumbers = (array) => {
    const newArr = [];

    array.forEach((item) => {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }
    });

    return newArr

};

console.log(getUninqNumbers(numbers));
