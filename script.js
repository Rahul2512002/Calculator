let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        updateDisplay(currentInput);
    }
}

function setOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    if (operator === '+') {
        result = parseFloat(previousInput) + parseFloat(currentInput);
        } else if (operator === '-') {
            result = parseFloat(previousInput) - parseFloat(currentInput);
        }
    updateDisplay(result);
    currentInput = result;
    previousInput = '';
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}