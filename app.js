// Mensagem de boas vindas

alert("Seja bem-vindo(A) ao jogo do número secreto!");

// Declarando variáveis

let numeroSecreto = 5;
let numeroChute;
// Enquanto o númeroChute não for = ao número secreto
while (numeroChute!=numeroSecreto) {
    numeroChute = prompt("Escolha um número de 1 a 10");
// Comparando números

if (numeroChute==numeroSecreto) {
    alert(`Parabéns! Você descobriu o número secreto! (${numeroSecreto})`);
} else  if (numeroChute>numeroSecreto){
    alert(`Você errou! o número ${numeroChute} é maior do que o número secreto`);
} else {
    alert(` Você errou! O número ${numeroChute} é menor do que o número secreto`);
}
}
