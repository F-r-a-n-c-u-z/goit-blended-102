// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const randomNumber = (amount) => Math.floor(Math.random() * amount) + 1;

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
    divContainerElement.appendChild(div)
    }

    box.append(divContainerElement);

    event.currentTarget.reset();
}
