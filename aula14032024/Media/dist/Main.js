"use strict";
class Calculo {
    static media(trabalho, prova) {
        return trabalho * 0.4 + prova * 0.6;
    }
}
let trabalho = 4.0;
let prova = 6.0;
console.log(Calculo.media(trabalho, prova).toFixed(1));
