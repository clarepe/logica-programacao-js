

function aplicarDesconto() {
    var valorCompra = parseFloat(document.getElementById('Valor_da_compra').value);
    var tipoCliente = document.getElementById('escalaLoja').value;
    var desconto;

    // Define o desconto baseado no tipo de cliente
    if (tipoCliente === 'normal') {
        desconto = 0; 
    }
}