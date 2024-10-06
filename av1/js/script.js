function aoClicar() {

    // Captura dos elementos dos Inputs no HTML
    let getNameProvider = document.getElementById('nameProvider').value;
    let nameProvider = document.getElementById('nameProvider');
    let getIdPasep = parseFloat(document.querySelector('#idPasep').value);
    let numberPisPasep = document.getElementById('idPasep');
    let getRateHours = parseFloat(document.querySelector('#rateHours').value);
    let numberRateHours = document.getElementById('rateHours');
    let getWorkedHours = parseFloat(document.querySelector('#workedHours').value);
    let numberWorkedHours = document.getElementById('workedHours');

    // Deixando os campos obrigatório para preenchimento
    if (!nameProvider.checkValidity()) {
        alert('O nome do prestador de serviços PJ é obrigatório.');
        aoClicar.preventDefault();
    }

    if (!numberPisPasep.checkValidity()) {
        alert('O PIS/PASEP do prestador de serviços PJ é obrigatório.');
        aoClicar.preventDefault();
    }

    if (!numberRateHours.checkValidity()) {
        alert('O valor hora do prestador de serviços PJ é obrigatório.');
        aoClicar.preventDefault();
    }

    if (!numberWorkedHours.checkValidity()) {
        alert('As horas trabalhadas no mês corrente do prestador de serviços PJ é obrigatório.');
        aoClicar.preventDefault();
    }

    // Definindo os valores minímos para valor/hora e hora/mês
    if (getRateHours < 20) {
        alert('O valor/hora minímo é R$ 20,00.');
        aoClicar.preventDefault();
    } else if (getRateHours > 500) {
        alert('O valor/hora máximo é R$ 500,00.');
        aoClicar.preventDefault();
    } else if (getWorkedHours < 20){
        alert('As horas trabalhadas no mês deve ser no mínimo 20 horas.');
        aoClicar.preventDefault();
    } else if (getWorkedHours > 200) {
        alert('As horas trabalhadas no mês deve ser no máximo 200 horas.');
        aoClicar.preventDefault();
    }

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