let result = 1
for (i = 15; i <= 35; i++) {
    console.log(`${i} * ${BigInt(result)} = ${BigInt(result * i)}`)
    result = result * i
}
console.log(`Final result = ${BigInt(result)}`)