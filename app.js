const NUM_DISPLAY = document.getElementById("numDisplay");
const OPERATOR_DISPLAY = document.getElementById("operatorDisplay");

let RUNNING_TOTAL = 0;

const allButtons = document.querySelectorAll("button");
const functionButtons = document.getElementsByClassName("functionBtn");
const numberButtons = document.querySelectorAll(".numberBtn");

const clearButton = functionButtons["clear"];

// allButtons.forEach(button => {
//     button.addEventListener('mouseover', () => {
//         console.log(button);
//     })
// })

numberButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent))
})

clearButton.addEventListener('click', clearScreen)


function appendNumber(number) {
    if (NUM_DISPLAY.textContent === '0') clearNumber();
    NUM_DISPLAY.textContent += number;
}

function clearScreen() {
    NUM_DISPLAY.textContent = '';
    OPERATOR_DISPLAY.textContent = '';
}

function clearNumber() {
    NUM_DISPLAY.textContent = '';
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

// function updateDisplay() {
//     NUM_DISPLAY.textContent = DISPLAY_VALUE;
//     OPERATOR_DISPLAY.textContent = DISPLAY_OPERATOR;
// }
