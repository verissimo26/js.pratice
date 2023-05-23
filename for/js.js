const z = 5

function fibonaccAteN(n) {

    let a = 0;
    let b = 1;

    let sequencia = []

    while (a <= n) {
        sequencia.push(a)

        const temp = a
        a = b;
        b = temp + a;
    }
    return sequencia
}

const sequenciaFibo = fibonaccAteN(z)
console.log(sequenciaFibo)
