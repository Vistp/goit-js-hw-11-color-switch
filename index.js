const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
console.log(colors[1]);


const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const bodyEl = document.querySelector('body');
console.log(bodyEl);
console.log(startBtn);
console.log(stopBtn);

// bodyEl.style.backgroundColor = colors[4];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    console.log('Нажали на СТАРТ');
    startBtn.setAttribute('disabled', 'true');

    intervalId = setInterval(() => {
        const randomColor = colors[randomIntegerFromInterval(0, colors.length-1)];
        // bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
        bodyEl.style.backgroundColor = randomColor;
        console.log('Меняем цвет фона каждую секунду');
        console.log(randomColor);
        
    }, 1000)

}

stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
    console.log('Нажали на СТОП');
    // console.log(intervalId);
    clearInterval(intervalId);
    startBtn.removeAttribute('disabled', 'true');
}
