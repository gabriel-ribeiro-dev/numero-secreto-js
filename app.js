// Mensagem de boas vindas

alert("Seja bem-vindo(A) ao jogo do número secreto!");

// Declarando variáveis

let numeroSecreto = 5;
let numeroChute = prompt("Escolha um número entre 1 e 10");

// Comparando números

if (numeroChute==numeroSecreto) {
    alert(`Parabéns! Você descobriu o número secreto! (${numeroSecreto})`);
} else  if (numeroChute>numeroSecreto){
    alert(`Você errou! o número ${numeroChute} é maior do que o número secreto`);
} else {
    alert(` Você errou! O número ${numeroChute} é menor do que o número secreto`);
}