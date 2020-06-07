let quantImpar = 0;
let quantpar = 0;

let vet = [3, 32, 452, 41, 42, 756, 454, 4121, 5, 43, 6, 7, 86, 2];
vet.sort((a, b) => a - b);

for (let i = 0; i < vet.length; i++) {
  if (vet[i] % 2 == 0) {
    quantpar++;
  } else {
    quantImpar++;
  }
}

console.log(`Quantidade de par ${quantpar}`);
console.log(`Quantidade de Impar ${quantImpar}`);
