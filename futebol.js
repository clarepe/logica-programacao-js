// futebol.js
function jogoFutebol(local, visitante) {
    let resultado;

    if (local === visitante) {
        resultado = "empate";
    } else if (local > visitante) {
        resultado = "vitória do primeiro time";
    } else {
        resultado = "vitória do segundo time";
    }

    return resultado;
}
