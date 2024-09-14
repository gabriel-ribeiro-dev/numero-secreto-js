
    // Mensagem de boas vindas
    alert ('Seja bem-vindo(A) ao jogo do Número Secreto!');

    // Declarando variáveis
    let numeroSecreto = 4;

    // Exibir o número no console
console.log (numeroSecreto);

// Obter o chute do usuário

    let numeroChute = prompt ('Escolha um número entre 1 e 10');

    // Comparando o chute  com o número secreto e exibindo a mensagem de vitória ou derrota na tela
    if (numeroChute==numeroSecreto) {
     alert (`Parabéns! Você descobriu o número secreto! (${numeroSecreto})`);
    } else {
        alert ('Você errou!');
    }