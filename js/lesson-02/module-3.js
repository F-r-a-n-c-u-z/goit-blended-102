// ! Масиви і функції
//TODO:=========task-01=================
//Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку.

// const str = 'JavaScript, HTML, CSS, React';
// const strArr = str.split(", ");
// console.log(strArr);
// for (const key of strArr) {
//     console.log(key);
// }

//TODO:=========task-02=================
// Знайти кількість слів у рядку, використовуючи методи масивів та цикл for...of.

// const message = 'JavaScript is a popular programming language.';
// // console.log(message.split(" ").length);
// const normolizedMessage = message.split(" ");
// let count = 0;
// for (const key of normolizedMessage) {
//     count += 1;
// }
// console.log(count);


//TODO:=========task-03=================
// Об'єднати масив слів в рядок, розділений комами та пробілами.
// const words = ['JavaScript', 'HTML', 'CSS', 'React'];
// console.log(words.join("-").toLocaleLowerCase().replaceAll("-", ", "));

//TODO:=========task-04=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." .Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const stringArray = ['JavaScript', 'HTML', 'CSS', 'React'];
// const substring = 'S';
// const filtredArray = [];
// for (const word of stringArray) {
//     if (word.indexOf(substring) !== -1) {
//         filtredArray.push(word);
//     }
// }


// console.log(
//   `Масив елементів, що містять підстроку ${substring} : ${filtredArray.join(" i ")}`
// );

//TODO:=========task-05=================
// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.
//  const array = ['JavaScript', 'HTML', 'CSS', 'SS'];
//  const elem = 'SS';

//TODO:============task-06==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

//TODO:=============task-07=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//TODO:=========task-08=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// console.log(calculateAverage(10, 10, 20, 200));

//TODO:=========task-09=================
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл з оператором break та continue.
// const numbers = [5, 11, 21, 8, 7, 15, 11, 11];

// console.log(getOddNumbers(numbers));
