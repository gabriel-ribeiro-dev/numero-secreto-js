// Mensagem de boas vindas
function mensagemDeBoasVindas(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

mensagemDeBoasVindas('h1', 'Jogo do número secreto');
mensagemDeBoasVindas('p', 'Escolha um número entre 1 e 10');

// Gerar número aleatório
function gerarNumeroAleatorio () {
    return parseInt (Math.random() *10 +1);
}
let numeroSecreto = gerarNumeroAleatorio();

// Verificar chute
function verificarChute() {
let chute = document.querySelector ('input').value;
    console.log (chute==numeroSecreto);
}
                