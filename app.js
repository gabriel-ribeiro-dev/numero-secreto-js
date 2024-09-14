
    // Mensagem de boas vindas
    alert ('Seja bem-vindo(A) ao jogo do Número Secreto!');

    // Declarando variável do número secreto
    let numeroSecreto = 4;

    // Exibir o número no console
console.log (numeroSecreto);

    // Obter o chute do usuário com múltplas tentativas

    let numeroChute;
while (numeroChute!=numeroSecreto) {
    numeroChute = prompt ('Escolha um número entre 1 e 10');
        // Comparando o chute  com o número secreto e exibindo a mensagem de vitória ou derrota na tela
        if (numeroChute==numeroSecreto) {
            alert (`Parabéns! Você descobriu o número secreto! (${numeroSecreto})`);
           } else if (numeroChute>numeroSecreto) {
       alert (`O número ${numeroChute} é maior do que o número secreto!`);
           } else {
               alert (`O número ${numeroChute} é menor do que o número secreto!`);
           }
}
