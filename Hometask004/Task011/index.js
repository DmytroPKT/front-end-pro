const inputNumber = Number(prompt("Enter number: "))
let pairedDivisors = []
let i = 1
let sum = 0

while(i <= inputNumber) {
    if (inputNumber % i === 0){
        if (i % 2 === 0) {
            pairedDivisors.push(i)
            sum = sum + i
        }
    }
    i++
}
console.log(`Summ of paired divisors for ${inputNumber} (${pairedDivisors.join(', ')}) = ${sum}`)
alert(`Summ of paired divisors for ${inputNumber} (${pairedDivisors.join(', ')}) = ${sum}`)