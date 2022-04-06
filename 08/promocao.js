function solucao(precos) {
    let total = 0;
    let menorPreco = precos[0];

    for (let preco of precos) {
        total += preco;

        if (preco < menorPreco) {
            menorPreco = preco;
        }
    }

    if (precos.length >= 3) {
        const menorPrecoDescontado = menorPreco * (50 / 100);
        const totalDescontado = total - menorPrecoDescontado;
        console.log(totalDescontado);
    } else {
        console.log(total);
    }

}

solucao([200, 150, 50, 100]);