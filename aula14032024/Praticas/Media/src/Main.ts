class Calculo {
    static media(trabalho: number, prova: number): number {
        return trabalho * 0.4 + prova * 0.6;
    }
}

let trabalho: number = 4.0;
let prova: number = 6.0;

console.log(Calculo.media(trabalho, prova).toFixed(1));