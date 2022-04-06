function processData(input) {
    const letras = input.slice(0);
    const primeiraLetra = input.slice(0, 1);
    const letrasRestantes = input.slice(1);

    if (primeiraLetra === primeiraLetra.toUpperCase() && letrasRestantes === letrasRestantes.toUpperCase()) {
        console.log(`${letras.toLowerCase()}`);
    } else if (primeiraLetra === primeiraLetra.toLowerCase() && letrasRestantes === letrasRestantes.toUpperCase()) {
        console.log(`${primeiraLetra.toUpperCase()}${letrasRestantes.toLowerCase()}`);
    } else {
        console.log(input);
    }
}
processData("lock");