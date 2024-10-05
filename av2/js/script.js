function aoClicar() {

    // Captura dos elementos dos Inputs no HTML
    let getNomeAluno = document.querySelector('#nomeAluno').value;
    let getNumeroInscricao = parseInt(document.querySelector('#numeroInscricao').value);
    let getAnoNascimento = parseInt(document.querySelector('#anoNascimento').value);
    let getNatureza = parseInt(document.querySelector('#naturezaNota').value);
    let getHumanas = parseInt(document.querySelector('#humanasNota').value);
    let getLinguagens = parseInt(document.querySelector('#linguagensNota').value);
    let getMatematica = parseInt(document.querySelector('#matematicaNota').value);
    let getRedacap= parseInt(document.querySelector('#redacaoNota').value);

    let msgRetorno;

    // Precisa concluir... cabeça deu tchutchu...
    if (getNatureza, getHumanas, getLinguagens, getMatematica, getRedacap >= 550) {
        msgRetorno = "Aprovado";
        console.log(msgRetorno);
    } else if (getNatureza, getHumanas, getLinguagens, getMatematica, getRedacap < 400) {
        msgRetorno = "Reprovado";
        console.log(msgRetorno);
    }

}

let botao = document.querySelector('.btnResultado');
botao.addEventListener('click', aoClicar);