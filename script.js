const botoes = document.querySelectorAll(".botao");
const saida = document.querySelector("#saida");
let resultado = "";

function apagar(){
    return saida.textContent = "";
}

function escrever(btn){
    return saida.textContent += btn.textContent;
}

botoes.forEach(botoes => botoes.onclick = () => {
    if(resultado == ""){
        escrever(botoes);
        if(botoes.textContent == "="){
            resultado = eval(saida.textContent.slice(0, -1));
            saida.textContent = eval(saida.textContent.slice(0, -1));
        }
    } else {
        if(botoes.textContent == "+" || botoes.textContent == "-" || botoes.textContent == "*" || botoes.textContent == "/"){
            escrever(botoes);
            resultado = "";
        } else {
            apagar();
            escrever(botoes);
            resultado = "";
        }
    }
    if(botoes.textContent == "CE"){
        apagar();
    }
});