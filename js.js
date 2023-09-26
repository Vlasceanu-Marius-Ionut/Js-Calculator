'use strict';

let calcInput = document.getElementById('calc');
let buttons = document.querySelectorAll('button');
let inputString = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            inputString = eval(inputString);
            calcInput.value = inputString;
        } else if (e.target.innerHTML === 'AC') {
            inputString = "";
            calcInput.value = inputString;
        } else if (e.target.innerHTML === 'Del') {
            inputString = inputString.substring(0, inputString.length - 1);
            calcInput.value = inputString;
        } else {
            inputString += e.target.innerHTML;
            calcInput.value = inputString;
        }
    });
});
