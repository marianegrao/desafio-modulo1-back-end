function solucao(carta) {
    const cartas = ["Q", "J", "K", "A", "2", "3"];

    for (let i = 0; i < cartas.length; i++) {

        if (cartas[i] === carta) {
            console.log(cartas[i + 1]);

        } else if (carta === "3") {
            console.log("Q");
            break
        }
    }
}

solucao("3");