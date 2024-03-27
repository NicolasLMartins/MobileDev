class Calculadora {
    public multiplicar(num1: number, num2: number): number {
        return num1 * num2;
    }
}

const calculadora = new Calculadora();
console.log(calculadora.multiplicar(5, 10));