class Calculo {
    static total(...values: number[]) {
        var sum: number = 0.0;

        values.forEach(value => {
            sum += value;
        });
        
        console.log(sum);
    }

    static desconto(): number {
        
    };
}

let prod1 = 600;
let prod2 = 400;

Calculo.total(prod1, prod2);
Calculo.desconto();