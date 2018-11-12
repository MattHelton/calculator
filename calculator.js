const add = (num1, num2) => {
    return num1 + num2
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

const calc = (callback, num1, num2) => {
   return callback(num1, num2)

}

console.log(calc(add, 3, 4))