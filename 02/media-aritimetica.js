function solucao(lista) {
    let soma = 0;
    for (let valor of lista) {
        soma += valor;
    }
    const mediaFinal = soma / lista.length;
    console.log(mediaFinal);

}

solucao([2, 3, 4]);