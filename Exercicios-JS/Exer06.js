function parametros(capital,taxajuros,tempoAplicacao) {

    juros = capital * taxajuros * tempoAplicacao

    montante = capital + juros 
    
    console.log('Seu montante = ',montante)
}

parametros(2000,2,3)

function parametros2(capital,taxajuros,tempoAplicacao) {

    
    montante = capital*Math.pow((1 + taxajuros), tempoAplicacao)

    juros = montante - capital

    console.log('Taxa de juros =',juros.toFixed(2))
}

parametros2(1400,0.07,2)

