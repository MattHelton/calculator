const add = (...numbers) => {
    answer = 0
    for (let number of numbers) answer += number
    return answer
}
const subtract = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    return num1 / num2
}

const calc = (callback, ...numbers) => {
   return callback(...numbers)

}


console.log(calc(add,3, 4, 5, 1000))