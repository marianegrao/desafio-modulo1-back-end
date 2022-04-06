function solucao(numeros) {
    let soma = 0;
    let indice = 0;

    for (let numero of numeros) {
        soma += numero;
    }

    for (let i = 0; i < soma; i++) {
        indice++;
        if (indice < 0) {
            indice = numeros.length;
        } else if (indice > numeros.length) {
            indice = 1;
        }
    }
    console.log(indice);

}

solucao([1, 3, 2, 1]);

