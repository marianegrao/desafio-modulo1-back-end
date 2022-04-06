function solucao(lista) {
    let cacula = Math.max(...lista);
    let caculaEncontrado = false;

    for (let idade of lista) {
        if (idade >= 18) {
            if (idade <= cacula) {
                cacula = idade;
                caculaEncontrado = true;
            }
        }
    }

    if (caculaEncontrado) {
        console.log(cacula);
    } else {
        console.log("CRESCA E APARECA");
    }
}

solucao([12, 18, 27]);