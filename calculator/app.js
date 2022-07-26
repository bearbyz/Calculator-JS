// document.getElementById("myText").value
let num1, num2 = 0
let numToTal = 0
let str = ''
let lock = false
let ope

function numClicks(number) {
    

    if(!lock){
        if(!ope) {
            num1 = str += number
            document.getElementById("myText").value = str
        }else{
            num2 = str += number
            console.log(num2)
            document.getElementById("myText").value = str
        }
    }else{
        document.getElementById("myText").value = 'PRESS THE AC !!!'
    }
    
}

function setPlus() {
    ope = '+'
    str = ''
}
function setMinus() {
    ope = '-'
    str = ''
}
function setMultiple() {
    ope = '*'
    str = ''
}
function setDivide() {
    ope = '/'
    str = ''
}

equalButton = () => {
    switch (ope) {
        case '+':
            document.getElementById("myText").value = Number(num1) + Number(num2);
            ope = null
            lock = true
            break;
        case '-':
            document.getElementById("myText").value = Number(num1) - Number(num2);
            ope = null
            lock = true
            break;
        case '*':
            document.getElementById("myText").value = Number(num1) * Number(num2);
            ope = null
            lock = true
            break;
        case '/':
            document.getElementById("myText").value = Number(num1) / Number(num2);
            ope = null
            lock = true
            break;

        default:
            break;
    }
}

clearButton = () => {
    lock = false
    num1, num2 = 0
    str = ''
    ope = null
    document.getElementById("myText").value = '0'
}
