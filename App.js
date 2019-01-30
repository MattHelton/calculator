import { add, subtract, multiply, divide, calc, average, number } from "./Modules/Calculator.js"

let addBtn = document.getElementById("add")
let subtractBtn = document.getElementById("subtract")
let multiplyBtn = document.getElementById("multiply")
let divideBtn = document.getElementById("divide")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let point = document.getElementById("point")
let averageBtn = document.getElementById("average")
let equal = document.getElementById("equal")
let ac = document.getElementById("ac")
let negPos = document.getElementById('neg-pos')
let digits = []
let num1 = 0
let num2 = 0
let existingNumbers = []
let values = []
let display = document.getElementById('display')

let total = 0

one.addEventListener("click", function () {
  console.log(1)
  digits = `${digits}1`
  console.log(digits)
})
two.addEventListener("click", function () {
  console.log(2)
  digits = `${digits}2`
  console.log(digits)
})
three.addEventListener("click", function () {
  console.log(3)
  digits = `${digits}3`
  console.log(digits)
})
four.addEventListener("click", function () {
  console.log(4)
  digits = `${digits}4`
  console.log(digits)
})
five.addEventListener("click", function () {
  console.log(5)
  digits = `${digits}5`
  console.log(digits)
})
six.addEventListener("click", function () {
  console.log(6)
  digits = `${digits}6`
  console.log(digits)
})
seven.addEventListener("click", function () {
  console.log(7)
  digits = `${digits}7`
  console.log(digits)
})
eight.addEventListener("click", function () {
  console.log(8)
  digits = `${digits}8`
  console.log(digits)
})
nine.addEventListener("click", function () {
  console.log(9)
  digits.push('9')
  console.log(digits)
})
zero.addEventListener("click", function () {
  console.log(0)
  digits = `${digits}0`
  console.log(digits)
})
// point.addEventListener("click", point())
equal.addEventListener("click", function () {
  // num2 = digits

  // let answer = parseInt(num1, 10) + parseInt(num2, 10)
  // console.log(answer)
  // digits = answer
  console.log(existingNumbers)
  existingNumbers.push(digits.join(''))
  digits = digits.slice(0, 0)

  const numbers = existingNumbers.map(digit => parseInt(digit, 10))
  const value = numbers.reduce((acc, curr) => {
    return acc + curr
  }, 0)
  existingNumbers = existingNumbers.slice(0, 0)
  values.push(value)
  console.log(value)
  console.log(values)

  const runningTotal = values.reduce((acc, curr) => {
    return acc + curr
  }, 0)

  console.log(runningTotal)
})

ac.addEventListener("click", function () {
  digits = digits.slice(0, 0)
  existingNumbers = existingNumbers.slice(0, 0)
  values = values.slice(0, 0)
  num1 = 0
  num2 = 0
})
addBtn.addEventListener("click", function add(e) {
  // answer = 0
  // for (let num of nums) answer += num
  // return answer
  console.log(digits)
  if (digits.length >= 1) {
    existingNumbers.push(digits.join(''))

    digits = digits.slice(0, 0)
  } else {
    existingNumbers.push(0)
  }

  console.log("digits should be empty: " + digits)
  console.log("existingNumbers: " + existingNumbers)

})
negPos, addEventListener("click", function () {
  if (digits > 0) {
    return Math.abs(digits) * -1
  } else {
    return Math.abs(digits)
  }
  console.log(digits)
})
// subtractBtn.addEventListener("click", subtract())
// multiplyBtn.addEventListener("click", multiply())
// divideBtn.addEventListener("click", divide())
// averageBtn.addEventListener("click", average())