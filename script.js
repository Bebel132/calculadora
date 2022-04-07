const botoes = document.querySelectorAll('.botao');
const input_num1 = document.querySelector('#input1');
const input_num2 = document.querySelector('#input2');
const display = document.querySelector('#display');
let span = document.querySelector('#span');

let operador = '';

let array = [];

botoes.forEach(botoes => botoes.onclick = () => {
    if (operador == ''){
        input_num1.value += botoes.value;
        input_num1.focus();
        array.push(botoes.value);
        console.log(array);
    }
    else if (operador != ''){
        input_num2.value += botoes.value;
        input_num1.focus();
        array.push(botoes.value);
        console.log(array);
    }
    if (operador == "" && display.value != ''){
        array[0] = display.value;
        array.push(botoes.value);
        display.value = "";
    }

    switch (botoes.value){
        case "+":
            span.innerHTML = "+";
            operador = "+";
            break;
        case "-":
            span.innerHTML = "-";
            operador = "-";
            break;
        case "/":
            span.innerHTML = "/";
            operador = "/";
            break;
        case "*":
            span.innerHTML = "*";
            operador = "*";
            break;
        case "=":
            array.pop();
            array = array.toString();
            console.log(array);
            array = array.replaceAll(",", "");
            console.log(array);
            console.log(eval(array));
            display.value += String(eval(array));
            operador = "";
            array = [];
    }
});

const botao_apagar = document.querySelector('.botao-apagar').onclick = () => {
    input_num1.value = "";
    input_num2.value = "";
    display.value = "";
    span.innerHTML = "";
    array = [];
}