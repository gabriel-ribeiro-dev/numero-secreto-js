    // Mensagem de boas vindas
    alert ('Seja bem-vindo(A) ao jogo do Número Secreto!');

    // Declarando a variável do número secreto
    let numeroSecreto = parseInt(Math.random()*100 + 1);

    // Declarando a variável de controlhe de tentativas
    let tentativas = 1;

    // Obter o chute do usuário com múltplas tentativas
    let numeroChute;
while (numeroChute!=numeroSecreto) {
    numeroChute = parseInt (prompt ('Escolha um número entre 1 e 10'));

// Verificar se o chute é um número de fato
while (isNaN(numeroChute)) {
    alert ('O que você digitou não é um número');
    numeroChute = parseInt (prompt ('Escolha um número entre 1 e 10'));
    
}
    // Comparando o chute  com o número secreto e exibindo a mensagem de vitória ou derrota na tela
        if (numeroChute==numeroSecreto) {
break;
        } else if (numeroChute>numeroSecreto) {
       alert (`O número ${numeroChute} é maior do que o número secreto!`);
           } else {
               alert (`O número ${numeroChute} é menor do que o número secreto!`);
           }
           tentativas++;

        }
        

        // Palavra tentativas e exebição da mensagem correta
        let PalavraTentativas = tentativas>1? 'Tentativas' : 'tentativa';
        alert (`Parabéns! Você descobriu o número secreto! (${numeroSecreto}) com ${tentativas} ${PalavraTentativas}`);