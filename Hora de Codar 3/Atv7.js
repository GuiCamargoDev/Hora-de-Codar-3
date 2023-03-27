// inicializa a soma das notas como zero
let somaNotas = 0;

// lê cada nota
for (let i = 1; i <= 6; i++) {
    let nota = parseFloat(prompt(`Informe a ${i}ª nota:`));//${i} como se fosse o i++, porém ele adiciona a variável e a cada vez que o codigo roda ele armazena e já pede a outra variavel até atingir o limite

    // verifica se a nota é válida (entre 0 e 10)
    while (nota < 0 || nota > 10 || isNaN(nota)) {
        nota = parseFloat(prompt(`Nota inválida. Informe a ${i}ª nota novamente:`));
    }

    // adiciona a nota à soma
    somaNotas += nota;
}

// calcula a média e imprime o resultado
let media = somaNotas / 6;
alert(`A média do aluno é: ${media}`);