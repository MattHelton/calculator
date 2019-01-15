import { add, subtract, multiply, divide, calc, average } from './Modules/Calculator.js'

let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let zero = document.getElementById('zero')
let point = document.getElementById('point')
let average = document.getElementById('average')
let equal = document.getElementById('equal')
let ac = document.getElementById('ac')

add.addEventListener('click', add())
subtract.addEventListener('click', subtract())
multiply.addEventListener('click', multiply())
divide.addEventListener('click', divide())
average.addEventListener('click', average())