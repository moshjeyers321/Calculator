const RUNNING_TOTAL = 0;
const DISPLAY = document.getElementById("numDisplay");
const OPERATOR_DISPLAY = document.getElementById

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

function clear() {
    RUNNING_TOTAL = 0;
}

function updateDisplay() {
    DISPLAY.textContent = RUNNING_TOTAL
}

updateDisplay();