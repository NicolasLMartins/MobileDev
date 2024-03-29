class Calculadora {
    static adicao(...values: number[]): number {
        let sum: number = 0;

        values.forEach(value => {
            sum += value;
        });

        return sum;
    }

    static subtracao(...values: number[]): number {
        let result: number = values[0];

        values.forEach((value, i) => {
            if (i !== 0) {
                result -= value;
            }
        });

        return result;
    }

    static multiplicacao(...values: number[]): number {
        let product = 1;

        values.forEach(value => {
            product *= value;
        });

        return product;
    }

    static divisao(...values: number[]): number {
        if (values.some(value => value === 0)) {
            console.log("ERRO: Divisão por 0.");
        }

        let result = values[0];

        values.forEach((value, i) => {
            if (i !== 0) {
                result /= value;
            }
        });
        
        return result;
    }
}

const values: number[] = [2, 4, 6];

console.log(Calculadora.adicao(...values));
console.log(Calculadora.subtracao(...values));
console.log(Calculadora.multiplicacao(...values));
console.log(Calculadora.divisao(...values).toFixed(2));