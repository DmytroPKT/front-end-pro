let firstNumber = prompt('Enter first number:')
const operator = prompt('Enter operator "+" or "-" or "*" or "/":')
let secondNumber = prompt('Enter second number:')
let result = 0
let error = false


if (isNaN(firstNumber) && isNaN(secondNumber))  {
    alert(`Error. The numbers you entered (${firstNumber} and ${secondNumber}) are not NUMERIC DATA.`)
    error = true
} else if (isNaN(firstNumber))  {
    alert(`Error. FIRST entered (${firstNumber}) is not numeric data.`)
    error = true
} else if (isNaN(secondNumber)) {
    alert(`Error. SECOND entered (${secondNumber}) is not numeric data.`)
    error = true
} else if ((firstNumber === null || firstNumber === "") && (secondNumber === null || secondNumber === "") ) {
    alert("Error. You have not entered ANY number.")
    error = true
} else if (firstNumber === null || firstNumber === "") {
    alert("Error. You have not entered FIRST number.")
    error = true
} else if (secondNumber === null || secondNumber === "") {
    alert("Error. You have not entered SECOND number.")
    error = true
} else if (operator === null || operator === "") {
    alert("Error. You have not entered OPERATOR.")
    error = true
} else if (operator === "/" && secondNumber === "0") {
    alert("Error. Can't divide by 0.")
    error = true
} else  {
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber
            break;
        case "-":
            result = firstNumber - secondNumber
            break;
        case "*":
            result = firstNumber * secondNumber
            break;
        case "/":
            result = firstNumber / secondNumber
            break;
        default:
            error = true
            alert(`Error. (${operator}) - Wrong operator`)
    }
}

if (error != true) {
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
}

















// switch (operator) {
//     case "+":
//         result = firstNumber + secondNumber
//         break;
//     case "-":
//         result = firstNumber - secondNumber
//         break;
//     case "*":
//         result = firstNumber * secondNumber
//         break;
//     case "/":
//         result = firstNumber / secondNumber
//         break;
//     default:
//         error = true
//         alert(`${operator} - wrong operator`)
// }

// if (error != true) {
//     alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
// }
