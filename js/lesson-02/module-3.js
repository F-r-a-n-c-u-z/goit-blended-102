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
// const elem = 'SS';
//  const index = array.indexOf(elem);

// console.log(index);

// if (index !== -1) {
//     array.splice(index, 1);
// } else {
//     array.push(elem);
// }

// index !== -1? array.splice(index, 1): array.push(elem);

// console.log(array);

// function transformArr(arr, el) {
//     const index = arr.indexOf(el);
//     index !== -1 ? arr.splice(index, 1) : arr.push(el);
//     return arr;
// }

// console.log(transformArr(array, elem));

//TODO:============task-06==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//     if (typeof a === "number" && typeof b === "number") {
//         return Math.min(a, b);
//     } else {
//         return "Не є числом";
//     }
// }


// function min(a=10, b=15) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         throw new Error("Arg must be number")
//     } 
//     return Math.min(a, b);
// }
// console.log(min());

// TODO:=============task-07=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

const numbers = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumArray (arr = []) {
//     const newArray = [];
//     for (let index = 0; index < arr.length - 1; index++) {
//         newArray.push(arr[index] + arr[index + 1])
        
//     }
//     return newArray;
// }
// const result = sumArray(numbers)

// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

function evenArrayNumbers (arr = []) {
    const newArray = [];
    for (const number of arr) {
        if (number % 2 !==0){
            continue 
        }
        newArray.push(number)
    }
    return newArray
}
console.log(evenArrayNumbers(numbers))

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
