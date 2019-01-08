import {add, subtract, multiply, divide, calc, average} from './Modules/Calculator.js'

let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')

add.addEventListener('click', add())
subtract.addEventListener('click', subtract())
multiply.addEventListener('click', multiply())
divide.addEventListener('click', divide())
average.addEventListener('click', average())