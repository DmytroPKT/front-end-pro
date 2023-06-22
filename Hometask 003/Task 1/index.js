const firstNumber = getNumber('first')
const operation = prompt('Enter operator "+" or "-" or "*" or "/":')
const secondNumber = getNumber('second')
const operations = ['+', '-', '*', '/']



function getNumber(numberName) {
    return Number(prompt(`Enter ${numberName} number: `))
}

function isValidAction(operation) {
    return operations.includes(operation)
}


function isValidNumbers(num) {
    return !isNaN(num)
}


function generalValidation() {
    return isValidAction(operation) && isValidNumbers(firstNumber) && isValidNumbers(secondNumber)
}


(function allIsValid() {
    if (!generalValidation()){
        alert("Invalid data") 
    } else {
        calc(firstNumber, operation, secondNumber)
        const result = calc(firstNumber, operation, secondNumber)
        showResult(firstNumber, operation, secondNumber, result)
    }
})()




function calc(a, operation, b) {
    let res 
    switch(operation) {
        case('+'):
            res = a + b
            break;
        case("-"):
            res = a - b
            break; 
        case("*"):
            res = a * b
            break;
        case('/'):
            res = a / b
            break;
    }
    return res
}


function showResult (a, operation, b, result) {
    alert(`${a} ${operation} ${b} = ${result}`);
}

