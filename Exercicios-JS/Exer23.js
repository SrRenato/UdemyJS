/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

const NotaAluno = (CodigoAluno, nota1, nota2, nota3) => {
  let notas = [];
  notas.push(nota1);
  notas.push(nota2);
  notas.push(nota3);

  notas.sort((a, b) => (a < b ? 1 : -1)); // organiza de forma crecente

  nota1 = nota1 * 2;
  nota2 = nota2 * 3;
  nota3 = nota3 * 4;

  mp = ((nota1 + nota2 + nota3) / 9).toFixed(2);

  if (mp >= 5) {
    console.log(
      `O codigo do aluno e ${CodigoAluno} Suas notas sao ${notas[0]}, ${notas[1]}, ${notas[2]} || Voce esta APROVADO`
    );
  } else {
    console.log(
      `O codigo do aluno e ${CodigoAluno} Suas notas sao ${notas[0]}, ${notas[1]}, ${notas[2]} || Voce esta REPROVADO`
    );
  }
};

NotaAluno(123, 2.8, 6, 3.5);
