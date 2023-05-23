const tarifa = 2.80;
const idade = 0;

function precoTarifaCriança(tarifa) {
    if (idade <= 6) {
        return "tarifa grátis"
    }
}

function precoTarifaEstudante(tarifa) {
    return (tarifa - 0.5)
    
}

function precoTarifaIdoso(tarifa) {
    return (tarifa - 0.3)
}


console.log (precoTarifaCriança(tarifa));
console.log(precoTarifaEstudante(tarifa).toFixed(2));
console.log( precoTarifaIdoso(tarifa).toFixed(2));
;
