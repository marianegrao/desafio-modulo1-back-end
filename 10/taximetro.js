function solucao(min, km) {
    let kmAtual = 0;
    let minAtual = 0;
    const minMaxInicial = 50 * 20;
    const kmMaxInicial = 70 * 10;
    const kmDescontado = (km - 10) * 50 + (kmMaxInicial);
    const minDescontado = (min - 20) * 30 + (minMaxInicial);

    if (km > 10) {
        kmAtual = kmDescontado;
    } else {
        kmAtual = km * 70;
    }

    if (min > 20) {
        minAtual = minDescontado;
    } else {
        minAtual = min * 50;
    }
    const valorTotal = Math.floor(kmAtual + minAtual);
    console.log(valorTotal);
}
solucao(25, 11.5);