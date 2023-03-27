const n = parseInt(prompt("Insira o valor de N para imprimir as tabuadas:"));

for (let i = 1; i <= n; i++) {
    document.write(`Tabuada de ${i}: `);
    for (let j = 1; j <= 10; j++) {
        document.write(` | ${i} x ${j} = ${i * j}`);
    }
    document.write("<br>");
}