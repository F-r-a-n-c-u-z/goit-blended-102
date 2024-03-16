//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const listEl = document.querySelector('.js-accordion-list');

listEl.addEventListener('click', event => {
  const target = event.target;
  if (target.nodeName !== 'BUTTON') return;
  target.nextElementSibling.classList.toggle('active');
});
