let peso = 80;
let altura = 1.80;

function calcIMC (peso) {
    return (peso / (altura * altura)).toFixed(2);
}

console.log(`
O Peso da Pessoa é ${peso} 
a altura é ${altura}, 
o IMC é ${calcIMC(peso)}
`);

const imc = calcIMC(altura, peso)

console.log(imc)

