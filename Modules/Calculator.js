export function numberHandler(func) {

}

export function add(...nums) {
    // answer = 0
    // for (let num of nums) answer += num
    // return answer
    const answer = nums.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    console.log(answer)
}
export function subtract(...nums) {
    answer = 0
    return num1 - num2
}
export function multiply(num1, num2) {
    return num1 * num2
}
export function divide(num1, num2) {
    return num1 / num2
}
export function average(...nums) {
    let sum = 0
    let numNums = 0
    for (let num of nums) {
        sum += num
        numNums += 1
    }
    return sum / numNums
}
export function calc(callback, ...nums) {
    return callback(...nums)
}

export function number(number) {
    return number
    console.log(number)
}