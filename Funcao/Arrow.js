let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

dobro = (a) => 2 * a; // retur implicito

console.log(dobro(Math.PI));

let ola = function () {
  return "ola";
};

ola = () => "ola";

console.log(ola());
