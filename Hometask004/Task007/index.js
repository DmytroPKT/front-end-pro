let result = 0
for (i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        console.log(`${result} + ${i} = ${result + i}`)
        result = result + i
    }
}
console.log(`Final result = ${result}`)