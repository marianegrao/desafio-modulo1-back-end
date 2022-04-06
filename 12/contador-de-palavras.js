function solucao(texto) {
    const textoSemEspacosFinais = texto.trim();
    const textoEmArray = textoSemEspacosFinais.split(" ");
    let qtdDePalavras = 0;

    for (let palavras of textoEmArray) {
        if (palavras !== "" && textoEmArray.length !== 1) {
            qtdDePalavras++;
        }
    }

    console.log(qtdDePalavras);
}

solucao("  ")