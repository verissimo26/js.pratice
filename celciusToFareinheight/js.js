//conversao temperatura

let celcius = 30;
let farenheight = 86;

function celciusToFh (celcius) {
    return (celcius * 9) / 5 + 32;
}

console.log(`${celcius} equivalem a ${celciusToFh(celcius)} 
graus ferenheight`    
)


function fhToCelcius (farenheight) {
    return ((farenheight - 32) * 5) / 9;
}

console.log(`${farenheight} equivale a ${fhToCelcius(farenheight)}`)