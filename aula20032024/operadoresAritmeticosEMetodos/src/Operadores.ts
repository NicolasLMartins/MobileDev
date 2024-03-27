// Enunciado: Crie uma classe chamada Operadores que recebe dois números.
// Crie os métodos adicao, subtracao, multiplicacao e divisao.
// Escreva na tela o resultado destas operações. 

class Operadores {
    private num1: number;
    private num2: number;
    
    constructor(
        num1: number,
        num2: number
    ) {
        this.num1 = num1;
        this.num2 = num2;
    }
    public adicao(): number {
        return this.num1 + this.num2 ;
    }
    public subtracao(): number {
        return this.num1 - this.num2 ;
    }
    public multiplicacao(): number {
        return this.num1 * this.num2 ;
    }
    public divisao(): number {
        return this.num1 / this.num2 ;
    }
}

const operacoes = new Operadores(5, 10);
console.log(operacoes.adicao());
console.log(operacoes.subtracao());
console.log(operacoes.multiplicacao());
console.log(operacoes.divisao());