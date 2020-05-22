/*17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function Trabalho(PlanoTrabalho, Salario) {
  switch (PlanoTrabalho) {
    case "A":
      var novoSal = Salario * 1.1;
      console.log(`O novo salario e ${novoSal.toFixed(2)}`);
      break;
    case "B":
      var novoSal = Salario * 1.15;
      console.log(`O novo salario e ${novoSal.toFixed(2)}`);
      break;
    case "C":
      var novoSal = Salario * 1.2;
      console.log(`O novo salario e ${novoSal.toFixed(2)}`);
      break;
    default:
      console.log("Plano e invalido");
      break;
  }
}

Trabalho("C", 1400);
