let comprimento = 10;
let largura = 5;
 

function calcArea (comprimento, largura) {
    return comprimento * largura;
} 

const area = calcArea(comprimento,largura);
console.log(area)

function calcPerimemtro (comprimento, largura) {
    return 2* (comprimento, largura);
}

const perimetro = calcPerimemtro(comprimento, largura)

function printDOM() {
    document.getElementById("calc").innerHTML = `A area é ${area} e o Perimetro ${perimetro}`
}

console.log(area, perimetro)
printDOM();