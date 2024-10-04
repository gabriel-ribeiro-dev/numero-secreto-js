    // Exibir texto na tela
    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

    // Gerar número aleatório
    function gerarNumeroAleatorio () {
        return parseInt (Math.random() *10 +1);
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