'use strict'

const calculatorpatrrat = document.getElementById('calculatorpatrrat');
const ecran = document.getElementById('ecranul');
const butonie = document.querySelector('button');
let num1 = ''
let num2 = ''
let operator = ''


butonie.addEventListener('click'),() =>{
    const buttonText = buttonText.textContent;

    if(isNaN(buttonText) || buttonText === '.'){
        if(operator === '+'){
            num1 += buttonText;
        }else {
            num2 += buttonText;
        }
    }else if(buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/'){
        operator = buttonText;
    }else if( buttonText === '=')
}




function calculator(opeator, num1, num2){
    switch(opeator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return('operator invalid')
    }
}calculator()


