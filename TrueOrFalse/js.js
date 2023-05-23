let num1 = 10; 
let num2 = 11;

function divisivel () {
    return (num1 % num2) === 0
}

const divisibilade  = divisivel(num1, num2)

console.log(`o ${num1} é divisivel por ${num2} ? ${divisibilade ? "SIM" : "NÃO"} `
);



