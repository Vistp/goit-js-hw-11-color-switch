import {colors} from './colors.js';

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const bodyEl = document.querySelector('body');
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    startBtn.setAttribute('disabled', 'true');

    intervalId = setInterval(() => {
        const randomColor = colors[randomIntegerFromInterval(0, colors.length-1)];
        bodyEl.style.backgroundColor = randomColor;
        // console.log(randomColor);
    }, 1000)
}

function onStopBtnClick() {
    clearInterval(intervalId);
    startBtn.removeAttribute('disabled', 'true');
}
