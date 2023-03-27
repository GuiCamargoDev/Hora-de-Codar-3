let aprovados = 0;

while (true) { //Coloca True pq assim ele sempre vai fazer o laço de repetição, se não digitar o S ele quebra esse código e dá o alert
    var nota1 = parseFloat(prompt("Digite a primeira nota do aluno"));
    var nota2 = parseFloat(prompt("Digite a segunda nota do aluno"));

    var resultado = (nota1 + nota2) / 2;

    if (resultado >= 9.5) {
        aprovados++
    }

    var resposta = prompt("Você deseja calcular a média de outro aluno? (S/N)");
    if (resposta.toUpperCase() !== "S") { //toUpperCase - usado aqui para que a resposta retorne no (if) como maiuscula para que não dê erro no código e ele encerre
        break; //caso digite algo diferente de (S/s) o código para e vai para o alert
    }
}

alert("Quantidade de alunos aprovados: " + aprovados);