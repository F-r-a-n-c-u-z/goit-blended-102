// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const randomNumber = amount => Math.floor(Math.random() * amount) + 1;

const box = document.querySelector('.box');
const form = document.querySelector('form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const amount = Number(event.currentTarget.elements.box.value);
  box.innerHTML = '';

  const divContainerElement = document.createElement('div');
  divContainerElement.classList.add('number-container');

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.classList.add('number');
    div.textContent = randomNumber(amount);

    if (div.textContent % 2 === 0) {
      div.classList.add('even');
    } else {
      div.classList.add('odd');
    }
    divContainerElement.appendChild(div);
  }

  box.append(divContainerElement);

  event.currentTarget.reset();
}

//TODO:=========task-02=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас error
*/

const input = document.querySelector('.input');

// Подія input
// input.addEventListener('input', event => {
//   const input = event.currentTarget;
//   if (input.value.length >= 6) {
//     input.classList.add('success');
//     input.classList.remove('error');
//   } else {
//     input.classList.add('error');
//     input.classList.remove('success');
//   }
// });

// Подія focus
// 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// input.addEventListener('focus', event => {
//   const input = event.currentTarget;
//   //   if (input.value === '') {
//   //     input.classList.add('error');
//   //   } else {
//   //     input.classList.add('success');
//   //   }
//   //   console.log(input.value.length);

//   input.value.trim()
//     ? input.classList.add('success')
//     : input.classList.add('error');
// });

// 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// input.addEventListener('blur', event => {
//   const input = event.currentTarget;
//   input.value.trim()
//     ? input.classList.add('success')
//     : input.classList.add('error');
// });
