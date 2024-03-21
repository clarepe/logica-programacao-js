function converteTemperatura() {
    
    const
        temperaturaAtual = parseFloat(window.prompt('Digite a temperatura atual entre Fahrenheit, Celsius ou Kelvin:')),
        escalaAtual = window.prompt('Escolha a escala atual Fahrenheit, Celsius ou Kelvin').toLowerCase(),
        conversao = window.prompt('Escolha a escala a ser convertida Fahrenheit, Celsius ou Kelvin').toLowerCase();

    const
        CelFahr = (temperaturaAtual * 9 / 5) + 32,
        CelKev = temperaturaAtual + 273.15,
        FahrCel = (temperaturaAtual - 32) * 5 / 9,
        FahrKel = (temperaturaAtual + 459.67) * 5 / 9,
        KelCel = (temperaturaAtual) - 273.15,
        KelFahr = temperaturaAtual * 9 / 5 - 459.67;

    if (escalaAtual === 'c' && conversao === 'f') {
        window.alert(`A temperatura atual em Fahrenheit é ${CelFahr.toFixed(2)}`);
    } else if (escalaAtual === 'c' && conversao === 'k') {
        window.alert(`A tempetura atual em Kelvin é ${CelKev.toFixed(2)}`);
    } else if (escalaAtual === 'f' && conversao === 'c') {
        window.alert(`A temperatura atual em Celsius é ${FahrCel.toFixed(2)}`);
    } else if (escalaAtual === 'f' && conversao === 'k') {
        window.alert(`A temperatura atual em Kevin é ${FahrKel.toFixed(2)}`);
    } else if (escalaAtual === 'k' && conversao === 'c') {
        window.alert(`A temperatura atual em  Celsius é ${KelCel.toFixed(2)}`);
    } else if (escalaAtual === 'k' && conversao === 'f') {
        window.alert(`A temperatura atual em Fahrenheit é ${KelFahr.toFixed(2)}`);
    }
    else {
        window.alert('Impossivel reconhecer os dados, verifique se digitou tudo corretamente')
    }


}
