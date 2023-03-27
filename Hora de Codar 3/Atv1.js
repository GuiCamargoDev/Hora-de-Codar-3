let n1 = parseInt(prompt("Digite um número"));
var n2 = parseInt(prompt("Digite outro número"));

while (n2 <= 0) {
    var n2 = prompt("Digite um valor maior que zero");
}

document.write(n1 / n2);