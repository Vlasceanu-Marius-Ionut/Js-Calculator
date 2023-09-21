'use strict'

let calcontainer = document.getElementById('call');
let buttons = document.querySelector('button');

let stringer = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'Ac'){
            string =""
            input.value = string
        }
        else if(e.target.innerHTML == 'Del'){
            string = string.substring(0, string.lenght-1);
            input.value = string
        }else {
            string += e.tarrget.innerHTML;
            input.value = string
        }
    })
})