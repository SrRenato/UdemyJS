function compras (trabalho1, trabalho2) {
const comprarsoverte = trabalho1 || trabalho2
const comprarTv50 = trabalho1 && trabalho2 
// const comprarTv30 = !!(trabalho1 ^ trabalho2) // bitwise XOR - ou exclusivo 
const comprarTv32 = (trabalho1 != trabalho2)
const mantersaudadevel = !comprarsoverte

    return{comprarsoverte,comprarTv50, comprarTv32, mantersaudadevel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

