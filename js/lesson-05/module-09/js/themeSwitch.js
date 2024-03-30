import { body, checkbox } from './refs.js';
const LS_KEY = 'theme';

checkbox.addEventListener('click', onCheckBoxChange);
document.addEventListener('DOMContentLoaded', renderPage);

function onCheckBoxChange(event) {
  if (event.target.checked) {
    body.classList.replace('light', 'dark');
    localStorage.setItem(LS_KEY, 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem(LS_KEY, 'light');
  }
}

function renderPage() {
  const lsData = localStorage.getItem(LS_KEY);
  if (lsData === 'dark') {
      body.classList.replace('light', 'dark');
      checkbox.checked = true;
  } else {
    body.classList.replace('dark', 'light');
  }
}


