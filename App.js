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
let digit = 0


one.addEventListener("click", function(){
    console.log(1)
    return 1
})
two.addEventListener("click", function(){
    console.log(2)
    return 2
})
three.addEventListener("click", function(){
    console.log(3)
    return 3
})
four.addEventListener("click", function(){
    console.log(4)
    return 4
})
five.addEventListener("click", function(){
    console.log(5)
    return 5
})
six.addEventListener("click", function(){
    console.log(6)
    return 6
})
seven.addEventListener("click", function(){
    console.log(7)
    return 7
})
eight.addEventListener("click", function(){
    console.log(8)
    return 8
})
nine.addEventListener("click", function(){
    console.log(9)
    return 9
})
zero.addEventListener("click", function(){
    console.log(0)
    return 0
})
// point.addEventListener("click", point())
// equal.addEventListener("click", equal())
// ac.addEventListener("click", ac())
// addBtn.addEventListener("click", add())
// subtractBtn.addEventListener("click", subtract())
// multiplyBtn.addEventListener("click", multiply())
// divideBtn.addEventListener("click", divide())
// averageBtn.addEventListener("click", average())