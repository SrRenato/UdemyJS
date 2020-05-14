function getinteiroaleatorioentre(min, max) {

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    
}

let opcao = 0

while (opcao != -1) {
    
opcao = getinteiroaleatorioentre (-1,10)

console.log(`A opcao escolhida foi ${opcao}`)

    
}

console.log('Fim da pesquisa')