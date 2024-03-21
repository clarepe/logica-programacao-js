function calculaImc(peso,altura) {
    const imc = peso / altura ** 2; //a linha altura ** 2 está elevando o valor da variável altura ao quadrado. Isso é equivalente a altura * altura. No contexto do cálculo do IMC, isso é necessário porque a fórmula do IMC requer a altura ao quadrado.
    let mensagem;
    if (imc < 18.5) {
        mensagem ='IMC: ${imc.toFixed(1)} --> abaixo do peso'
    } else if (imc < 25) {
        mensagem ='IMC: ${imc.toFixed (1)} --> Peso normal'
    } else if (imc < 30) {
        mensagem ='IMC: ${imc.toFixed(1)} -->Sobrepeso'
    } else if (imc < 35) {
        mensagem ='IMC: ${imc.toFixed(1)} --> Obsidade grau I'
    } else if (imc < 40) {
        mensagem ='IMC: ${imc.toFixed(1)} -->Obsidade grau II'
    } else {
        mensagem ='IMC: ${imc.toFixed(1)} --> Obsidade grau III'
    }

    return mensagem;
}


