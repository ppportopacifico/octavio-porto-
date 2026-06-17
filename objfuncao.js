const calculadora = {

numero1: 20,
numero2: 10,

  somar() {
    return this.numero1+this.numero2
  },

  subtrair() {
    return this.numero1 -this.numero2;
  },

  multiplicar( ) {
    return this.numero1*this.numero2 ;
  },

  dividir( ) {
    if (this.numero2 === 0) {
      throw new Error("Não é possível dividir por zero.");
    }
    return this.numero1/this.numero2 ;
  }
};

// Exemplos de uso
console.log(calculadora.somar());       // 15
console.log(calculadora.subtrair());   // 5
console.log(calculadora.multiplicar()); // 50
console.log(calculadora.dividir());    // 2