const formatar = new Intl.NumberFormat("pt-br", {style:"currency", currency:"brl"}).format(0.30000000000000000000000000000004)

console.log(formatar)


const formatar2 = 0.30000000000000000000000000000004.toFixed(2); 

console.log(formatar2)