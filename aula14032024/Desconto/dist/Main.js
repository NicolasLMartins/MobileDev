"use strict";
class Calculo {
    static total(...values) {
        var sum = 0.0;
        values.forEach(value => {
            sum += value;
        });
        return sum;
    }
    static desconto(total, desconto) {
        return total -= total * desconto / 100;
    }
    ;
}
let prod1 = 600;
let prod2 = 400;
console.log(Calculo.desconto(Calculo.total(prod1, prod2), 10));
