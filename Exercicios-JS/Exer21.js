const planoSaude = (idade) => {
  valorPlano = 100;

  if (idade < 10) {
    NovoValor = valorPlano + 80;
    return console.log(
      `sua idade e ${idade} anos.O valor que você paga ${NovoValor}`
    );
  } else if (idade <= 30) {
    NovoValor = valorPlano + 50;
    return console.log(
      `sua idade e ${idade} anos.O valor que você paga ${NovoValor}`
    );
  } else if (idade <= 60) {
    NovoValor = valorPlano + 95;
    return console.log(
      `sua idade e ${idade} anos.O valor que você paga ${NovoValor}`
    );
  } else {
    NovoValor = valorPlano + 130;
    return console.log(
      `sua idade e ${idade} anos.O valor que você paga ${NovoValor}`
    );
  }
  //crianca < 10 = 80 reais
  //idade entre<=30 = 50 reais
  //idade maior q 30 > 60 = 95 reais
  // idade >60 = 130 reais.
};

planoSaude();
