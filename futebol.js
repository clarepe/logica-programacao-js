// futebol.js
function jogoFutebol(local, visitante) {
    let resultado;

    if (local === visitante) {
        resultado = "empate";
    } else if (local > visitante) {
        resultado = "vitória do Senai Feras Front-End";
    } else {
        resultado = "vitória do Outro curso";
    }

    return resultado;
}
