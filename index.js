const resultEL = document.querySelector('.results-part')
const clearBTN = document.querySelector('.clearBTN')
const equalBTN = document.querySelector('.equalBTN')
const multiplyBTN = document.querySelector('.multiplyBTN')
const divideBTN = document.querySelector('.divideBTN')
const minusBTN = document.querySelector('.minusBTN')
const plusBTN = document.querySelector('.plusBTN')
const num7 = document.querySelector('.seven')
const num8 = document.querySelector('.eight')
const num9 = document.querySelector('.nine')
const num4 = document.querySelector('.four')
const num5 = document.querySelector('.five')
const num6 = document.querySelector('.six')
const num1 = document.querySelector('.one')
const num2 = document.querySelector('.two')
const num3 = document.querySelector('.three')
const num0 = document.querySelector('.zero')
const periodBTN = document.querySelector('.periodBTN')
let decimalCheckArr = [];
let numArr = [];
let totalResult = '';
let newArr = [0];

clearBTN.addEventListener('click', () => {
    resultEL.textContent = ''
    decimalCheckArr = []
    numArr = []
    newArr = [0]
    totalResult = ''
})

equalBTN.addEventListener('click', () => {

})

plusBTN.addEventListener('click', () => {

})

minusBTN.addEventListener('click', () => {

})

multiplyBTN.addEventListener('click', () => {

})

divideBTN.addEventListener('click', () => {

})

num0.addEventListener('click', () => {
    resultEL.textContent += 0
})
num1.addEventListener('click', () => {
    resultEL.textContent += 1
})
num2.addEventListener('click', () => {
    resultEL.textContent += 2
})
num3.addEventListener('click', () => {
    resultEL.textContent += 3
})
num4.addEventListener('click', () => {
    resultEL.textContent += 4
})
num5.addEventListener('click', () => {
    resultEL.textContent += 5
})
num6.addEventListener('click', () => {
    resultEL.textContent += 6
})
num7.addEventListener('click', () => {
    resultEL.textContent += 7
})
num8.addEventListener('click', () => {
    resultEL.textContent += 8
})
num9.addEventListener('click', () => {
    resultEL.textContent += 9
})
periodBTN.addEventListener('click', () => {
    console.log(decimalCheckArr)
    for (let i = 0; i < resultEL.textContent.length; i++) {
        if (decimalCheckArr[i] === '.') {
            break
        } else {
            resultEL.textContent += '.'
            return decimalCheckArr.push('.')
        }
    }
    for (let index = 0; index < resultEL.textContent.length; index++) {
        if (decimalCheckArr[index] === '.') {
            break
        } else {
            return decimalCheckArr.push(resultEL.textContent[index])
        }
        
    }
})