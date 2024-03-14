"use strict";
class Calculo {
    static total(...values) {
        var sum = 0.0;
        values.forEach(value => {
            sum += value;
        });
        console.log(sum);
    }
    static desconto() {
    }
    ;
}
let prod1 = 600;
let prod2 = 400;
Calculo.total(prod1, prod2);
Calculo.desconto();
