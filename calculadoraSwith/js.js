const num1 = 20;
const num2 = 20;
const operador = "+";

function calcular (num1,num2,operador) {
let resultado;

    switch (operador) {
        case "+": resultado = a + b 
            break;
        case "-": resultado = a - b
            break;
        case "*": resultado = a * b
            break;
        case "/": resultado = a / b
            break
        default: 
            return "Operador invalido"
    }
    return `${resultado}`
}






