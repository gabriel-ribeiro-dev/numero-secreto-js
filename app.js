
// Lista de números sorteados
let listaDeNumerosSorteados = [];
// Número limite
let numeroLimite = 10;
// Exibir mensagem inicial
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}
// Exibir texto na tela
    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }

    exibirMensagemInicial();

    // Gerar número aleatório
    function gerarNumeroAleatorio () {
        let numeroEscolhido = parseInt (Math.random() *numeroLimite+1);
let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
    }
if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
return gerarNumeroAleatorio();
} else {
    return numeroEscolhido;
    listaDeNumerosSorteados.push(numeroEscolhido);
}
}   
    let numeroSecreto = gerarNumeroAleatorio();

// Contar tentativas
let tentativas = 1;

    // Verificar chute
    function verificarChute() {
    let chute = document.querySelector ('input').value;
if (chute==numeroSecreto) {
let palavraTentativas = tentativas>1 ? 'Tentativas' : 'Tentativa';
let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
    exibirTextoNaTela('h1', 'Parabéns!');
exibirTextoNaTela('p', mensagemTentativas);
LimparCampo();
document.getElementById('reiniciar').removeAttribute('disabled');
} else if(chute>numeroSecreto) {
    exibirTextoNaTela('p', 'O número secreto é menor');
} else {
    exibirTextoNaTela('p', 'O número secreto é maior');
}
tentativas++;
}
                    
// Limpar campo input
function LimparCampo () {
    chute = document.querySelector('input');
       chute.value='';
}

// Reiniciar jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas =1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true);
}