let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let op = document.querySelector("#operacao");
let resultado = document.querySelector("#resultado")

function calculadora(op, num1, num2){
    switch(op){
        case '+':
        return num1 + num2;
        case '-':
        return num1 - num2;
        case '*':
        return num1 * num2;
        case '/':
        return num1 / num2;
        default:
            return 'Operação Inválida'

    }
}
op.addEventListener('change', (function(){
    resultado.innerHTML = calculadora(op.value, Number(num1.value), Number(num2.value))
}));