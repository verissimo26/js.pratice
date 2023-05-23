let idade = 60;

function faixaEtaria() {

    if(idade>= 0 && idade <12) {
        return "Criança"
    }else if (idade >= 13 && idade <= 17) {
        return "Adolecente"
    }else if (idade >= 18 && idade <= 40) {
        return "Adulto"
    }else {
        return "Idoso"
    } 

}

const quacificacao = faixaEtaria(idade)

console.log (` A Faixa etaria é ${quacificacao}`)

document.getElementById("ifElse").innerHTML =` a idade é ${idade} a faixa etaria é ${quacificacao}`

