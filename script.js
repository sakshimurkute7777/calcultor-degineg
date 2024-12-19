let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function clickNumber(number) {
    currentNumber += number.toString();
    display.value = currentNumber;
}

function clickOperator(op) {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = op;
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = 0;
    }
    display.value = result.toString();
    previousNumber = '';
    currentNumber = '';
    operator = '';
}

function clearDisplay() {
    display.value = '';
    previousNumber = '';
    currentNumber = '';
    operator = '';
}

function clickDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        display.value = currentNumber;
    }
}