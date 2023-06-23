const inputNumber = Number(prompt("Enter number: "))
let pairedDivisors = []
let i = 1

while(i <= inputNumber) {
    if (inputNumber % i === 0){
        if (i % 2 === 0) {
            pairedDivisors.push(i)
        }
    }
    i++
}
console.log(pairedDivisors.join(', '))
console.log(`Quantity of paired divisors for ${inputNumber} -    ${pairedDivisors.length}.`)
alert(`Quantity of paired divisors for ${inputNumber} -    ${pairedDivisors.length}.`)