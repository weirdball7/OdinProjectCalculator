// Varuables for the display
let firstNumber;
let secondNumber;
let operator;
let displayValue;
let result;
let buttonClicked;

const btn = document.getElementsByClassName('number');
const display = document.querySelector('#screen');

// Operations logic;
const add = (firstNumber, secondNumber) => {
    result = firstNumber + secondNumber;
    return result;
};

const subtract = (firstNumber, secondNumber) => {
    result = firstNumber - secondNumber;
    return result;
};

const multiply = (firstNumber, secondNumber) => {
    result = firstNumber * secondNumber;
    return result;
};

const divide = (firstNumber, secondNumber) => {
    result = firstNumber / secondNumber;
    return result;
};
// console.log(add(6,2));
// console.log(subtract(6,2));
// console.log(multiply(6,2));
// console.log(divide(6,2));

const operate = (firstNumber, operator, secondNumber) => {
    switch (operator) {
        case '+' :
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = subtract( firstNumber, secondNumber);
            break;
        case '*':
            result = multiply( firstNumber, secondNumber);
            break;
        case '/':
            result = divide( firstNumber, secondNumber);
            break;
        
    };
    return result;
};

// console.log(operate(6, '/', 2));

// displaying numbers when buuton is clicked

// getting the value of the buttons
const displayNumbers = () => {
    // displayValue = buttonClicked.value;
    console.log('pressed');
    // display.innerHTML = displayValue;
};

for (i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', displayNumbers);

};

