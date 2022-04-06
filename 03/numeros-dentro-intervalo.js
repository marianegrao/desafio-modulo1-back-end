function solucao(numero, limiteInferior, limiteSuperior) {
    const pertence = numero >= limiteInferior && numero <= limiteSuperior;
    if (pertence) {
        console.log("PERTENCE");
    } else {
        console.log("NAO PERTENCE");
    }
}
solucao(10, 5, 20);
