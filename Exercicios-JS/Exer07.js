function bhaskara(ax2, bx, c) {
  let resultados = []; // isso quarda o resultado para exibir

  let delta = bx ** 2 - 4 * ax2 * c;

  if (delta < 0) {
    return "Delta e negativo"; // isso retorna uma mensagem quando o delta for NEGATIVO
  }

  let x1 = ((-bx + Math.sqrt(delta)) / 2) * ax2;

  let x2 = ((-bx - Math.sqrt(delta)) / 2) * ax2; //Math.sqrt (raiz)

  resultados.push(x1);
  resultados.push(x2); // push isso puxa os o array []

  return resultados;
}

console.log(bhaskara(1, 3, 2));
console.log(bhaskara(3, 1, 2));
