function solucao(min, max, valores) {
    let podemJogar = [];

    for (let valor of valores) {
        if (valor >= min && valor <= max) {
            podemJogar.push(valor);
        }
    }

    console.log(podemJogar);

}

solucao(1, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9]);