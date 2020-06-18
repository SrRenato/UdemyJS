contador = (numero) => {
  contador = 0;
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] >= 10 && numero[i] <= 20) {
      const intervalo = numero[i];
      contador++;
      console.log(`dentro do intervalo. ${intervalo}`);
    } else {
      const fora = numero[i];
      console.log(`Fora do intervalo. ${fora}`);
    }
  }

  return `${contador}numeros total dentro do intervalo`;
};
numero = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21];

console.log(contador(numero));
