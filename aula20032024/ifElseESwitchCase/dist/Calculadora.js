"use strict";
class Calculadora {
    static calculo(operacao, ...valores) {
        let soma = 0;
        let resto = valores[0];
        let produto = 1;
        let quociente = valores[0];
        switch (operacao) {
            case "Soma":
                valores.forEach(valor => {
                    soma += valor;
                });
                return soma;
            case "Subtracao":
                valores.forEach((valor, i) => {
                    if (i !== 0) {
                        resto -= valor;
                    }
                });
                return resto;
            case "Multiplicacao":
                valores.forEach(valor => {
                    produto *= valor;
                });
                return produto;
            case "Divisao":
                if (valores.some(valor => valor === 0)) {
                    console.log("ERRO: Divisão por 0.");
                }
                valores.forEach((valor, i) => {
                    if (i !== 0) {
                        quociente /= valor;
                    }
                });
                return quociente.toFixed(2);
            default:
                return "Operação não disponível.";
        }
    }
}
const values = [10, 5, 4];
console.log(Calculadora.calculo("Soma", ...values));
console.log(Calculadora.calculo("Subtracao", ...values));
console.log(Calculadora.calculo("Multiplicacao", ...values));
console.log(Calculadora.calculo("Divisao", ...values));
