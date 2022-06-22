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

function operate(f, num1, num2) {
    return f(num1, num2);
}
// set value of something to the chosen operator, when another operator is called then evaluate the current value + total and then update total/current
//can append name of operator to an array and nums (operate function can take that array as input)
let totalValue = 0;
let currentValue = 0;
let operator;
const display = document.querySelector('#display');
display.textContent = currentValue;

const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');
const evalBtn = document.querySelector('.eval');
const clearBtn = document.querySelector('.clear');

operatorBtn.forEach(button => button.addEventListener('click', operation));
numberBtn.forEach(button => button.addEventListener('click', appendNum));
clearBtn.addEventListener('click', clear);
evalBtn.addEventListener('click', evaluate);
//    operators
//buttons change currentValue
//after operator pressed
//  allow input for new currentValue
//if = or another operator pressed
//  then change totalValue --> this.operate(this.operation, totalValue, currentValue)
//  
//smth smth arrays, reduce with objects
/// ** if number is presseed after operator, then show new totalValue as currentValue, / implement this at beginning of number?

//function to translate text content to function call
function operatorTrans(symbol) {
    switch (symbol) {
        case '+' :
            return add;
        case '-':
            return subtract;
        case '/':
            return divide;
        case 'x':
            return multiply;
    }
}

function evaluate (e) {
    //give answer for operation, and reset operator
    if (operator) {
        totalValue = operate(operator, +totalValue, +currentValue);
    }
    display.textContent = totalValue;
    operator = null;
}

function operation (e) {
    //how to handle if operator doesn't exist vs when operator does
    //what happens when operator doesnt exist? 
    //  keeps total the same, sets operator to the corresponding function, and allows for current value to change independent of total
    //when operator does exist 
    //  eval will eval the operation
    //  evaluate the previous operation, display the total value, allow for current value to change
    //the difference between the two?
    //  both display totalValue and let current value to change ... 
    newOperator = operatorTrans(e.target.textContent);
    totalValue = +totalValue;
    currentValue = +currentValue;
    if (operator) {
        totalValue = operate(operator, totalValue, currentValue);
    } else {
        totalValue = currentValue;
    }
    display.textContent = totalValue;
    currentValue = 0;
    operator = newOperator;
}

function operatorTrans(symbol) {
    switch (symbol) {
        case '+' :
            return add;
        case '-':
            return subtract;
        case '/':
            return divide;
        case 'x':
            return multiply;
    }
}
function appendNum(e) {
    const buttonValue = e.target.textContent;
    if (currentValue != 0) {
        currentValue = (currentValue*10) + +buttonValue;
    } else {
        currentValue = buttonValue;
    }
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

// link buttons
// add for each button event listener click    their operator
//     add onto the current total

//operate() will use reduce to go through all the operators?
