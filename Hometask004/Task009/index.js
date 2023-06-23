const inputNumber = Number(prompt("Enter number: "))
let numberDivisors = []
let i = 1

while(i <= inputNumber) {
    if (inputNumber % i === 0){
        numberDivisors.push(i)
    }
    i++
}
console.log(`Divisors for ${inputNumber} are: ${numberDivisors.join(', ')}`)
alert(`Divisors for ${inputNumber} are: ${numberDivisors.join(', ')}`)