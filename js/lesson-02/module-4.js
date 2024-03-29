//!  Літерал об'єкта
//!  Властвості та методи об'єкта
//TODO:============task-01==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.

// const square = {
//     height: 25,
//     width: 10,

//     calculateArea () {
//         return this.height * this.width;
//     }

// }
// console.log(square.calculateArea());

//TODO:============task-02==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// const store = {
//     products: ["apple", "banana", "tomato"],

//     addProduct(newProduct) {
//         this.products.push(newProduct);
//     },

//     hasProduct(product) {
//         return this.products.includes(product);
//     }
// }
// console.log(store.hasProduct('kiwi'));
// store.addProduct("kiwi");
// console.log(store.hasProduct('kiwi'));

//! Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-03======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {

//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',

// };
// function getBool(obj, key) {
//     return Object.keys(obj).includes(key);

// }
// // console.log(Object.entries(obj));
// console.log(getBool(obj, 'car')); // true

//TODO:============task-04======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// for (const number of Object.values(salaries)) {
//     sum += number;

// }

// console.log(sum);

//TODO:============task-05======================================================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// };

// console.log(Object.entries(user));

//TODO:============task-06======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// }
// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

//! Робота з масивом об'єктів rest/spred
//TODO:============task-07=========================
// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.

// const arr1 = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Mary' },
//   { id: 3, name: 'Bob' },
// ];
// const arr2 = [
//   { id: 2, name: 'Mary' },
//   { id: 4, name: 'Jane' },
//   { id: 5, name: 'Tom' },
// ];

// console.log(uniq(arr1, arr2));
