let valor 

console.log(valor)

valor = null
// Null nao possui valor *AUSENCIA DE VALOR 

console.log(valor)

//console.log(valor.toString()) ERRO

const produto = {}
console.log (produto.preco)
console.log(produto)

produto.preco = 3.50

console.log (produto)

produto.preco = undefined // Evite atribuir undefined 

console.log(!!produto.preco) 
// para tirar o atributo = delete produto.preco
console.log(produto)

produto.preco = null // sem preco ` o produto nao possui valor `

console.log(!!produto.preco)
console.log(produto)
