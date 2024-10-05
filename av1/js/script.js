function aoClicar() {

    // Captura dos elementos dos Inputs no HTML
    let getNameProvider = document.querySelector('#nameProvider').value;
    let getIdPasep = parseFloat(document.querySelector('#idPasep').value);
    let getRateHours = parseFloat(document.querySelector('#rateHours').value);
    let getWorkedHours = parseFloat(document.querySelector('#workedHours').value);

    // Calculo do valor bruto e taxas
    let grossValue = getRateHours * getWorkedHours;
    let valueGross = parseInt(grossValue);
    let inss;
    let irpf;
    let iss = (5 / 100) * grossValue;

    // Calculo de INSS
    if (valueGross <= 1500.99) {
        inss = (7.5 / 100) * grossValue;
    } else if (valueGross >= 1501 && valueGross <= 3000.99) {
        inss = (9 / 100) * grossValue;
    } else if (valueGross >= 3001 && valueGross <= 5000.99) {
        inss = (12 / 100) * grossValue;
    } else if (valueGross >= 5001) {
        inss = (14 / 100) * grossValue;
    }

    // calculo de IRPF
    if (valueGross <= 1500.99) {
        irpf = 0;
    } else if (valueGross >= 1501 && valueGross <= 2000.99) {
        irpf = (7.5 / 100) * grossValue;
    } else if (valueGross >= 2001 && valueGross <= 3000.99) {
        irpf = (15 / 100) * grossValue;
    } else if (valueGross >= 3001 && valueGross <= 4000.99) {
        irpf = (22.5 / 100) * grossValue;
    } else if (valueGross >= 4001) {
        irpf = (27.5 / 100) * grossValue;
    }

    let descontos = inss + irpf + iss;
    let netValue = valueGross - descontos;


    let mensagemValorBruto = ('Valor Bruto: ' + valueGross + '.');
    let menssageNetValue = ('Sr(a): ' + getNameProvider + ', PIS/PASEP: ' + getIdPasep + ', ' + ' seu salário líquido é: ' + netValue + '');
    let menssageDescontos = ('Descontos: INSS: ' + inss + '; ' + 'IRPF: ' + irpf + '; ' + 'ISS: ' + iss + '.')

    document.querySelector("#mensagemValorBruto").innerHTML = mensagemValorBruto;
    document.querySelector("#menssagemNetValue").innerHTML = menssageNetValue;
    document.querySelector("#menssagemDescontos").innerHTML = menssageDescontos;

}

let botao = document.querySelector('.btnCalcular');
botao.addEventListener('click', aoClicar);