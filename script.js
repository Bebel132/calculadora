const botoes = document.querySelectorAll('.botao');
const input_num1 = document.querySelector('#input1');
const input_num2 = document.querySelector('#input2');
const display = document.querySelector('#display');
let span = document.querySelector('#span');

let operador = '';
let valor1 = '';
let valor2 = '';
let expressao = '';

input_num1.focus();

botoes.forEach(botoes => botoes.onclick = () => {
    if(operador == ''){
        input_num1.value += botoes.value;
        valor1 += input_num1.value;
        console.log(valor1)
    } else if(operador != '') {
        input_num2.value += botoes.value;
        valor2 += input_num2.value;
        console.log(valor2)
    }

    switch (botoes.value){
        case "+":
            span.innerHTML = "+";
            operador = "+";
            break;
        case "-":
            span.innerHTML = "-"
            operador = "-"
            break;
        case "/":
            span.innerHTML = "/"
            operador = "/"
            break;
        case "*":
            span.innerHTML = "*"
            operador = "*"
            break;
        case "=":
            span.innerHTML = "";
            expressao = valor1 + operador + valor2;
            display.innerHTML = eval(expressao)
            console.log(eval(expressao))
            input_num1.value = "";
            input_num2.value = "";
            display.value = "";
            span.innerHTML = "";
            operador = "";
            valor1 = "";
            valor2 = "";
    }
});

const botao_apagar = document.querySelector('.botao-apagar').onclick = () => {
    input_num1.value = "";
    input_num2.value = "";
    display.value = "";
    span.innerHTML = "";
    operador = "";
    valor1 = "";
    valor2 = "";
}