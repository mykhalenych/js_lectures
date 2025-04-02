//------------------------Наслідування і класи-------------------------------------

//------------------------Конструктори-------------------------------------

// Object

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person("Alice", 25);
person1.greet(); // "Hello, my name is Alice and I am 25 years old."
const person2 = new Person("Bob", 40);
person2.greet(); // "Hello, my name is Bob and I am 40 years old."
console.log(person1, person2);
//

// Array

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

// String

const str = new String("Hello");
console.log(str); // [String: 'Hello']

//------------------------Built-in Prototypes-------------------------------------

Person.prototype.sayBye = function() {
    console.log(`${this.name} says goodbye!`);
};

//
person1.sayBye(); // "Alice says goodbye!"

const arr = [1, 2, 3];
console.log(arr.map(num => num * 2)); // [2, 4, 6]

//------------------------Класи-------------------------------------

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("Dog", "Woof");
console.log(dog)
dog.makeSound(); // "Dog says Woof"

const cat = new Animal("Cat", "Meow");
// cat.makeSound(); // "Dog says Woof"


// Get/Set методи

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get userName() {
        return this.name;
    }

    set userName(newName) {
        if (newName.length > 2) {
            this.name = newName;
        } else {
            console.log("Name is too short!");
        }
    }
}

const user = new User("John", 30);
console.log(user.userName); // "John"
user.userName = "Al"; // "Name is too short!"

//------------------------Статичні властивості і методи-------------------------

class MathUtils {
    static PI = 3.14159;

    static square(num) {
        return num * num;
    }

    static randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.square(4)); // 16
console.log(MathUtils.randomBetween(1, 10)); // випадкове число від 1 до 10

const math = new MathUtils();
console.log(math.PI); // Помилка: статичні методи і поля доступні тільки у класі, а не в екземплярах


//------------------------Наслідування класів-------------------------

class AnotherAnimal {
    constructor(name) {
        this.name = name;
    }

    anotherSpeak() {
        console.log('Another animal class speak')
        // console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends AnotherAnimal {
    constructor(name, breed) {
        super(name); // Викликає конструктор батьківського класу
        this.breed = breed;
    }

    speak() {
        // super.anotherAnimalClassSpeak();
        console.log('Another animal class speak')
        // Викликає метод speak() з батьківського класу
        // console.log(`${this.name} barks.`);
    }
}

const anotherDog = new Dog("Buddy", "Labrador");
console.log(anotherDog)
anotherDog.speak();
anotherDog.anotherSpeak();
// // "Buddy makes a noise."
// // "Buddy barks."

//------------------------Приватні/захищені властивості та методи------------


class UserTest {
    #password;

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    checkPassword(input) {
        return this.#password === input;
    }
}

const userTest = new UserTest("Alice", "secure123");
console.log(userTest.name); // "Alice"
//console.log(user.#password); // Помилка: приватне поле
console.log(userTest.checkPassword("secure123")); // true



class Admin extends UserTest {
    constructor(name, password, accessLevel) {
        super(name, password);
        this.accessLevel = accessLevel;
    }

    resetUserPassword(user, newPassword) {
        if (this.accessLevel === "superadmin") {
            console.log(user._password); // undefined
            user._password = newPassword; // Доступ до захищеного поля
            console.log(`Пароль користувача ${user.name} змінено.`);
        } else {
            console.log("Недостатньо прав для зміни пароля.");
        }
    }
}


const admin = new Admin("Bob", "adminPass", "superadmin");

console.log(userTest.checkPassword("secure123")); // true
admin.resetUserPassword(userTest, "newSecure456"); // "Пароль користувача Alice змінено."
console.log(userTest.checkPassword("newSecure456")); // true
