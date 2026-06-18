const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Teresina",
  };
  for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)

   }
  console.log(Object.keys (pessoa) );
  console.log(Object.values (pessoa) );
  console.log(Object.entries (pessoa) );