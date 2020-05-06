function tratarErro (erro){
    throw{
        nome:erro.name,
        msg: erro.message,
        date: new Date
    }
}


function imprimirNomeGrutado (obj){
    try{ 
    console.log(obj.name.ToUpperCase() + '!!!')
 } catch (e){
     tratarErro(e)
 } finally{
     console.log('Final')
 }
}

const obj = {nome: 'renato'}
imprimirNomeGrutado(obj)