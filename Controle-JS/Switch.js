const impromirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9: 
        console.log('NOTA MAXIMA')
        break
        case 8: case 7: 
        console.log('Aprovado')
        break
        case 6: case 5: case 4: 
        console.log('Recuperacao')
        break
        default:
            console.log('Reprovado')
    }
}

impromirResultado(8.9)