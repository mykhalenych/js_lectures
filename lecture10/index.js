//------------------Set & Map-------------------------------------

// Set — це колекція, що дозволяє зберігати лише унікальні значення,
// тобто дублікати не зберігаються

const uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(2); // Не буде додано, оскільки 2 вже є в Set

console.log(uniqueNumbers); // Set {1, 2}

const fruits = new Set();
fruits.add('apple').add('orange').add('banana');

console.log(fruits.has('apple'));  // true
console.log(fruits.has('grape'));  // false

fruits.delete('banana');
console.log(fruits);  // Set {'apple', 'orange'}

// Map зберігає пари ключ-значення,
// причому ключі можуть бути будь-якого типу (рядки, числа, об'єкти тощо).

const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);

console.log(map.get('name'));  // Alice
console.log(map.get('age'));   // 25

map.set('age', 30);  // Оновлення значення
console.log(map.get('age'));   // 30

const user = new Map();
user.set('name', 'John');
user.set('email', 'john@example.com');

console.log(user.get('name')); // John
console.log(user.get('email')); // john@example.com

//------------------WeakSet & WeakMap-------------------------------------

// Ці структури даних дозволяють зберігати слабкі посилання на об'єкти, що означає:
// Не перешкоджають garbage collector (збиранню сміття)**
// Не перебираються (forEach / for...of не працює)**

// WeakSet Зберігає лише об'єкти, і перевіряє лише наявність.

const obj = { name: 'Secret' };
const weakSet = new WeakSet();

weakSet.add(obj);
console.log(weakSet.has(obj)); // true

// Коли obj стане недоступним, він буде зібраний GC

// WeakMap Зберігає пари об'єкт-значення і ключем може бути лише об'єкт.

const secretData = new WeakMap();

class User {
  constructor(name) {
    this.name = name;
    secretData.set(this, { password: '1234' });
  }

  getSecret() {
    return secretData.get(this).password;
  }
}

const user = new User('Anna');
console.log(user.getSecret()); // 1234
