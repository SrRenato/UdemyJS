/*Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

function hortifrut(frutas) {
  switch (frutas) {
    case "maca":
      console.log("Nao vendemos essa fruta aqui");
      break;
    case "kiwi":
      console.log("Estamos com escassez de Kiwis");
      break;
    case "melancia":
      console.log("Aqui esta, sao 3 reais o quilo");
      break;
    default:
      console.log("ERRO!!! Digite a fruta [maca, kiwi, melancia]");
      break;
  }
}

hortifrut("melancia");
