function Getslaid (min,max){

const valor = Math.random() * (max - min) + min

return Math.floor(valor)
}

opcao = -1


do {
    opcao = Getslaid (-1,10)
    console.log(`A opcao dada foi ${opcao}`)
} while (opcao != -1);


console.log('Fim do programa')
