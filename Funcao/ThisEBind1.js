const pessoa = {
  saudacao: "bom dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;

falar(); // conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

/*O método bind() cria uma nova função que, quando chamada, 
tem sua palavra-chave this definida com o valor fornecido, 
com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos 
quando a nova função é chamada. */
