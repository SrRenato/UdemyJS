function fatorial(valor) {
  if (valor < 0) {
    return "Digite um valor maior ou igual a 0";
  } else if (valor == 0 || valor == 1) {
    return "1";
  } else {
    var acumula = 1;
    for (x = valor; x > 1; x--) {
      acumula = acumula * x;
    }
    return acumula;
  }
}

console.log(fatorial(12));
