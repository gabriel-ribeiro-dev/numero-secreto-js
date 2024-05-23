// Mensagem de boas vindas

alert("Seja bem-vindo(A) ao jogo do número secreto!");

// Declarando variáveis

let numeroSecreto = 5;
let numeroChute = prompt("Escolha um número entre 1 e 10");

// Comparando números

if (numeroChute==numeroSecreto) {
    console.log("Você descobriu o número secreto (5)!");
} else {
    console.log("Você errou!");
}