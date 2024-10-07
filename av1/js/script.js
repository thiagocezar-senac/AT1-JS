function formatarParaReal(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

function aoClicar() {

    // Captura dos elementos dos Inputs no HTML
    let getNameProvider = document.getElementById('nameProvider').value;
    let nameProvider = document.getElementById('nameProvider');
    let getIdPasep = document.querySelector('#idPasep').value;
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
    } else if (getWorkedHours < 20) {
        alert('As horas trabalhadas no mês deve ser no mínimo 20 horas.');
        aoClicar.preventDefault();
    } else if (getWorkedHours > 200) {
        alert('As horas trabalhadas no mês deve ser no máximo 200 horas.');
        aoClicar.preventDefault();
    }

    // Definindo valor máximo para caracteres do PIS/PASEP
    let maxCaracteres = 11;

    if (getIdPasep.length > maxCaracteres) {
        // Se o número de caracteres exceder o limite, corta o excesso
        getIdPasep = getIdPasep.slice(0, maxCaracteres);
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

    salarioBrutoReal = formatarParaReal(valueGross);
    salarioLiquidoReal = formatarParaReal(netValue);
    inssReal = formatarParaReal(inss);
    irpfReal = formatarParaReal(irpf);
    issReal = formatarParaReal(iss);
    descontosReal = formatarParaReal(descontos);

    let salarioBruto = ('Salário Bruto: ' + salarioBrutoReal + '.');
    document.querySelector("#salarioBruto").innerHTML = salarioBruto;

    let inssValor = ('INSS: ' + inssReal + '.');
    document.querySelector("#inssValor").innerHTML = inssValor;

    let irpfValor = ('IRPF: ' + irpfReal + '.');
    document.querySelector("#irpfValor").innerHTML = irpfValor;

    let issValor = ('ISS: ' + issReal + '.');
    document.querySelector("#issValor").innerHTML = issValor;

    let mensagemSalarioLiquido = ('Sr(a): ' + getNameProvider + ', inscrito sobre o PIS/PASEP: ' + getIdPasep + ', seu salário líquido é: ' + salarioLiquidoReal + '.');
    document.querySelector("#menssagemSalarioLiquido").innerHTML = mensagemSalarioLiquido;
}



let botao = document.querySelector('.btnCalcular');
botao.addEventListener('click', aoClicar);