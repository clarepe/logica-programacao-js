

function aplicarDesconto(tipo,desconto) {

    let tipoCliente;
    let mensagemDeERRO;

    
    if (tipoCliente === 'cliente') {
        desconto = 0; 
    }
    else if(tipoCliente==='clienteVip'){
        desconto =10;
    }
    else if(tipoCliente==='funcionarios'){
        desconto = 20;
    }
    mensagemDeERRO="o que você digitou, não é valido"
    let valorComDesconto=valorCompra-(valorCompra*(desconto/100));

    document.getElementById('valorCompra').value=valorComDesconto.toFixed(2);
    return desconto ?? mensagemDeERRO;

}