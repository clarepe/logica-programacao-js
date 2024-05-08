function calcularDescontoPorLitro(preco, desconto, quantidade_litros) {
  let valor_litros_total = quantidade_litros * preco;                   
  let desconto_final = (valor_litros_total / 100) * desconto;
  return desconto_final;
}

// Função para calcular o valor total a ser pago
function calcularValorTotal(litros, preco, tipoCombustivel) {
  let descontoTotal = 0;

  if (tipoCombustivel === "A") {
    descontoTotal += calcularDescontoPorLitro(preco, 5, litros); // 5% de desconto para álcool
  } else if (tipoCombustivel === "G") {
    descontoTotal += calcularDescontoPorLitro(preco, 6, litros); // 6% de desconto para gasolina
  }

  return (litros * preco) - descontoTotal;
}
function abastecer() {
  let litros = parseFloat(document.getElementById("litros").value);
  let preco = parseFloat(document.getElementById("preco").value);
  let tipoCombustivel;

  if (document.getElementById("alcool").checked) {
      tipoCombustivel = "A";
  } else if (document.getElementById("gasolina").checked) {
      tipoCombustivel = "G";
  }

  let valorTotal = calcularValorTotal(litros, preco, tipoCombustivel);

  document.getElementById("precoFinal").innerText = "Valor total a ser pago: R$ " + valorTotal.toFixed(2);
}

document.getElementById("btAbastecer").addEventListener("click", abastecer);
 
