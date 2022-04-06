const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]
function solucao(jogadores) {
    let jogadorZero = [];
    let jogadorUm = [];
    for (let jogador of jogadores) {
        if (jogador.jogada === 0) {
            jogadorZero.push(jogador.nome);
        } else if (jogador.jogada === 1) {
            jogadorUm.push(jogador.nome);
        }
    }

    if (jogadorZero.length > 1 && jogadorUm.length === 1) {
        console.log(jogadorUm[0]);
    } else if (jogadorZero.length === 1 && jogadorUm.length > 1) {
        console.log(jogadorZero[0]);
    } else {
        console.log("NINGUEM");
    }

}

solucao(jogadores);