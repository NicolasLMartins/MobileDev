class Calculo {
    static total(...values: number[]): number {
        var sum: number = 0.0;

        values.forEach(value => {
            sum += value;
        });
        
        return sum;
    }

    static desconto(total: number, desconto: number): number {
        return total -= total * desconto / 100;
    };
}

let prod1 = 600;
let prod2 = 400;

console.log(Calculo.desconto(Calculo.total(prod1, prod2), 10));