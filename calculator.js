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

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

let totalValue = 0;
let currentValue = 0;
const display = document.querySelector('#display');
display.textContent = currentValue;

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', calculator));
//make calculator object? 

let CalculatorObj = {
    name: 'calc',
}
for (let i = 0; i < 10; i++){
    CalculatorObj[i] = i;
}
function calculator (e) {
    const buttonValue = e.target.textContent;
    console.log(buttonValue);
    if (currentValue != 0) {
        currentValue = (currentValue*10) + CalculatorObj[buttonValue];
    } else {
        currentValue = buttonValue;
    }
    console.log(currentValue);
    display.textContent = currentValue;
}

function clear() {
    if (currentValue == 0) {
        totalValue = 0;
    } else {
        currentValue = 0;
    }
}
// link buttons
// add for each button event listener click    their operator
//     add onto the current total

//operate() will use reduce to go through all the operators?
