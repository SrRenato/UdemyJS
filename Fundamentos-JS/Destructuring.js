// Recurso do ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco:{
        logradouro: 'rua ABC',
        numero: 10000
    }
}

const { nome, idade} = pessoa

console.log(nome,idade)


const {endereco: e , bemhumorado = true} = pessoa

console.log(e,bemhumorado)

const { endereco:{logradouro, numero,cep}} = pessoa

console.log(logradouro,numero,cep)