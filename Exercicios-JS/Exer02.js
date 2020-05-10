function ladoquadrado(lado1,lado2,lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log("Triangulo Equilatero")
    }else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
        console.log("Triangulo Isoceles")
    } else {
        console.log("Triangulo Escaleno")
    }
}

ladoquadrado(6,5,4)