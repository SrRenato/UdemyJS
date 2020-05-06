function sBoaNoticia (nota){
    if(nota >= 8){
        console.log('Aprovado com ' + nota)
    }
}

sBoaNoticia(8.1)
sBoaNoticia(5.1)

function sforverdade (valor){
    if (valor){
        console.log('E verdade... ' + valor )
    }
}

sforverdade ()
sforverdade(null)
sforverdade(undefined)
sforverdade(NaN)
sforverdade('')
sforverdade(0)
sforverdade(-1)
sforverdade(' ')
sforverdade('?')
sforverdade([])
sforverdade([1,2])
sforverdade({})



