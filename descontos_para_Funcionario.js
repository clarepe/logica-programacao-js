
function aplicarDesconto(tipo, desconto, valorCompra) {
    let tipoCliente = tipo;
    let mensagemDeERRO;

    if (tipoCliente === 'cliente') {
        desconto = 0; 
    }
    else if (tipoCliente === 'clienteVip') {
        desconto = 10;
    }
    else if (tipoCliente === 'funcionarios') {
        desconto = 20;
    }
    mensagemDeERRO = "O que você digitou não é válido";

    let valorComDesconto = valorCompra - (valorCompra * (desconto / 100));

    document.getElementById('valorCompra').value = valorComDesconto.toFixed(2);

    return valorCompra ?? mensagemDeERRO;
}
