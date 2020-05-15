//Funcao sem retorno 
function imprimirsoma(a, b){
    console.log(a + b)
}

imprimirsoma(2, 3)
imprimirsoma(2)
imprimirsoma(2, 10, 4, 5, 6, 7, 8)
imprimirsoma()


//Funcao com retorno

function soma (a ,b = 1){
    return a + b 
}

console.log(soma (2, 3))
console.log(soma(2))