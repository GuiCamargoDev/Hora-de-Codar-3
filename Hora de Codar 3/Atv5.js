
const num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
const num2 = parseInt(prompt("Digite o segundo número inteiro: "));

const media = (num1 + num2) / 2;

document.write("Média aritmética: " + media);

let soma = 0;
for (let i = num1; i <= num2; i++) {
  soma += i;
}

const quantidade = num2 - num1 + 1;

const mediaInteiros = soma / quantidade;

document.write("Média dos números inteiros entre " + num1 + " e " + num2 + ": " + mediaInteiros);