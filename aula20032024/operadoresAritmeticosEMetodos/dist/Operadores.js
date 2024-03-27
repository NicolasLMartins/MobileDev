"use strict";
// Enunciado: Crie uma classe chamada Operadores que recebe dois números.
// Crie os métodos adicao, subtracao, multiplicacao e divisao.
// Escreva na tela o resultado destas operações. 
class Operadores {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    adicao() {
        return this.num1 + this.num2;
    }
    subtracao() {
        return this.num1 - this.num2;
    }
    multiplicacao() {
        return this.num1 * this.num2;
    }
    divisao() {
        return this.num1 / this.num2;
    }
}
const operacoes = new Operadores(5, 10);
console.log(operacoes.adicao());
console.log(operacoes.subtracao());
console.log(operacoes.multiplicacao());
console.log(operacoes.divisao());
