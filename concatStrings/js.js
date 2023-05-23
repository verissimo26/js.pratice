let nome =  "Igor"; 
let idade = 36;
let cidade =  "Guarulhos"

function criarMensagem (nome,idade,cidade) {
    return `Olá ${nome} sua idade ${idade}, mora em ${cidade}`
}

const mensagem = criarMensagem(nome,idade,cidade);


function mudarConteudo () {
    document.getElementById("string").innerHTML = `${mensagem}`;
}

mudarConteudo ();



