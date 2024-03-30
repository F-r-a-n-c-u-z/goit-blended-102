import { conrolsBtns, saveBtns } from "./refs.js";
import { showDisplay } from "./showDisplay.js";

conrolsBtns.addEventListener('click', onControlClick);
saveBtns.addEventListener('click', onSaveClick);
document.addEventListener('DOMContentLoaded', renderPage);

let count = 0;
const LS_KEY = 'counter';

function renderPage() {
    const lsData = Number(localStorage.getItem(LS_KEY)); 
    if (lsData) {
    count = lsData;
    showDisplay();
}

}

function onControlClick(event) {
    const target = event.target;
    const action = target.dataset.action;

    if (target.nodeName !== "BUTTON") return;
    
    if (action === 'decrease') {
        count -= 1; 
    }
    
    if (action === 'increase') {
        count += 1; 
    }

    if (action === 'reset') {
        count = 0;
    }
    showDisplay();
}

function onSaveClick(event) {
    const target = event.target;
    const action = target.dataset.action;

    if (target.nodeName !== "BUTTON") return;

    if (action === 'save') {
        localStorage.setItem(LS_KEY, count)
    }

    if (action === 'clear-save') {
        localStorage.removeItem(LS_KEY);
    }
}
