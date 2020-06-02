const notas = [7.7, 6.5, 5.2, 8.9, 7.6, 6.4, 4.8];

//Sem callback

const notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

console.log(notasBaixas);

//Com CallBack
/*O método filter() cria um novo array com todos os elementos que 
passaram no teste implementado pela função fornecida. */

const notasBaixas2 = notas.filter((nota) => {
  return nota < 7;
});

console.log(notasBaixas2);
