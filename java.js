document.getElementById('rolar-btn').addEventListener('click', function() {
    const numLados = parseInt(document.getElementById('num-lados').value) || 0;
    const numDados = parseInt(document.getElementById('num-dados').value) || 0;
    const resultadoElement = document.getElementById('resultado');
    const dadoSom = document.getElementById('dado-som');

    if (numLados <= 0 || numDados <= 0) {
        resultadoElement.textContent = "Insira valores válidos.";
        return;
    }

    dadoSom.play();

    let resultados = [];
    let soma = 0;
    for (let i = 0; i < numDados; i++) {
        let roll = Math.floor(Math.random() * numLados) + 1;
        resultados.push(roll);
        soma += roll;
    }

    resultadoElement.textContent = `Resultados: ${resultados.join(', ')} (Soma: ${soma})`;
});
