function solucao(lista) {
    let total = 0;
    for (let valor of lista) {
        total += valor;
    }

    console.log(total);

}
solucao([1, 2, 3, 4]);