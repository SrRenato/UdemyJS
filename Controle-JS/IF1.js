function sBoaNoticia(nota) {
  if (nota >= 8) {
    console.log("Aprovado com " + nota);
  }
}

sBoaNoticia(8.1);
sBoaNoticia(5.1);

function sforverdade(valor) {
  if (valor) {
    console.log("E verdade... " + valor);
  }
}

sforverdade();
sforverdade(null);
sforverdade(undefined);
sforverdade(NaN);
sforverdade("");
sforverdade(0);
sforverdade(-1);
sforverdade(" ");
sforverdade("?");
sforverdade([]);
sforverdade([1, 2]);
sforverdade({});

/*Operador condicional

O operador condicional é o único operador JavaScript que utiliza três operando.
 O operador pode ter um de dois valores baseados em uma condição. A sintaxe é:
 
 condição ? valor1 : valor2

 Se condição for verdadeira, o operador terá o valor de valor1. 
 Caso contrário, terá o valor de valor2. Você pode utilizar o operador condicional em qualquer 
 lugar onde utilizaria um operador padrão. 
 Por exemplo:

var status = (idade >= 18) ? "adulto" : "menor";*/
