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

const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');
const evalBtn = document.querySelector('.eval');
const clearBtn = document.querySelector('.clear');

operatorBtn.forEach(button => button.addEventListener('click', operation));
numberBtn.forEach(button => button.addEventListener('click', appendNum));
clearBtn.addEventListener('click', clear);
evalBtn.addEventListener('click', operate);
//    operators
//buttons change currentValue
//after operator pressed
//  allow input for new currentValue
//if = or another operator pressed
//  then change totalValue --> this.operate(this.operation, totalValue, currentValue)
//  
//smth smth arrays, reduce with objects
/// ** if number is presseed after operator, then show new totalValue as currentValue, / implement this at beginning of number?
function operation (e) {
    const operator = e.target.textContent;
}

function appendNum(e) {
    const buttonValue = e.target.textContent;
    console.log(buttonValue);
    if (currentValue) {
        currentValue = (currentValue*10) + +buttonValue;
    } else {
        currentValue = buttonValue;
    }
    console.log(currentValue);
    display.textContent = currentValue;
}
function clear() {
    if (!currentValue) {
        totalValue = 0;
        display.textContent = totalValue;
    } else {
        currentValue = 0;
        display.textContent = currentValue;
    }
}

function handleKey(e) {

}
// link buttons
// add for each button event listener click    their operator
//     add onto the current total

//operate() will use reduce to go through all the operators?
