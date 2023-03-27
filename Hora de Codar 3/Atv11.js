var dentro = 0;
var fora = 0;

for (let i = 1; i <= 10; i++) {
    let valor = parseInt(prompt(`Informe o valor ${i}`));

    if (valor >= 24 && valor <= 42) {
        dentro++;
    } else {
        fora++;
    }
}

document.write("Quantidade de números " + dentro);
document.write("<br>");
document.write("Quantidade de números " + fora);
