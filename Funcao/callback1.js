const fabricantes = ["mercedes", "audi", "bmw"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(
  imprimir
); /*O forEach executa o callback fornecido uma vez para cada elemento da
 ordem com um valor atribuido. Ele não é invocado para propriedades de índices que foram deletados ou
 que não foram inicializados (por ex. em arrays esparsos). */

fabricantes.forEach((fabricantes) => console.log(fabricantes));
