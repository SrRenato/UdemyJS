// par nome / Valor 

const saudação = 'Opa' // contexto léxico 1 

function exec(){
    const saudação = 'Falaaaa' //contexto lexico 2
    return saudação
}

// Objetos sao grupos aninhados de pares nome/Valor

const cliente = {
    nome: 'pedro',
    idade: 31,
    peso: 90,
    endereco: {
        lagradouro:'RUA Muito Legal',
        numero:123
    }
}

console.log(saudação)
console.log(exec())
console.log(cliente)
