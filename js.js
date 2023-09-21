'use strict'

const calculatorpatrrat = document.getElementById('calculatorpatrrat');
const ecran = document.getElementById('ecranul');
const butonie = document.querySelector('button');


let num1 = ''
let num2 = ''
let operator = ''


butonie.addEventListener('click'),() =>{
    const buttonText = buttonText.textContent;
    //WEE CRATE A BUTTON VARIABLE
    if(isNaN(buttonText) || buttonText === '.'){//IF THE BUTTONTEXT ISNAN = NOT A NUMBER = TRUE || FALSE
        if(operator === '+'){ //IF OPERATOR === + WILL CALCULATE NUM1 + WHAT WE TYPE(BUTTONTEXT)
            num1 += buttonText;
        }else {
            num2 += buttonText;
        }
    }else if(buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/'){ //CALCULATOR BUTTONS
        operator = buttonText;
    }else if( buttonText === '='){
        if(num1 !== '' && num2 !== '' && operator !== ''){ //RESULT, VA VERIFICCA DACA ARE SIR GOL
            const rezultat = calculator(operator, parseFloat(num1), parseFloat(num2));
        }ecran.textContent = `Rezultat:${rezultat}`;

        num1 = rezultat.toString();
        num2 = '';
        operator = '';
    }
    else if (button === 'C'){
        num1 = '';  //CLEAN
        num2 = '';
        operator = '';
    }
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


