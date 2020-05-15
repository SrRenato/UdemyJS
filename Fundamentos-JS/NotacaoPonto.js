console.log(Math.ceil(6.1))

const obj1 = {}
obj1.name = 'bola'
//obj1['nome'] = 'bola2'

console.log(obj1.name)

function obj(nome){
    this.nome = nome 
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new obj ('cadeira')
const obj3 = new obj ('mesa')

console.log(obj3.nome)
console.log(obj2.nome)
obj3.exec()