var soma = 0;
var quantidade = 0;

for (let i = 15; i <= 100; i++) {
    soma += i; quantidade++;
}
const media = soma / quantidade;

alert("A média aritmética dos números inteiros entre 15 e 100 é: " + media);