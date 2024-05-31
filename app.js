// Mensagem de boas vindas

alert("Seja bem-vindo(A) ao jogo do número secreto!");

// Declarando variáveis

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroChute;
let tentativas = 1;
// Enquanto o númeroChute não for = ao número secreto
while (numeroChute!=numeroSecreto) {
    numeroChute = prompt(`Escolha um número de 1 até ${numeroMaximo}`);
// Comparando números

if (numeroChute==numeroSecreto) {
break;
} else  if (numeroChute>numeroSecreto){
    alert(`Você errou! o número ${numeroChute} é maior do que o número secreto`);
} else {
    alert(` Você errou! O número ${numeroChute} é menor do que o número secreto`);
}
tentativas++;

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto! (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`);
