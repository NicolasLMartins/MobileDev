"use strict";
class Pessoa {
    static verificarIdade(idade) {
        if (idade >= 18) {
            return "Maior de idade.";
        }
        else {
            return "Menor de idade.";
        }
    }
}
console.log(Pessoa.verificarIdade(25));
console.log(Pessoa.verificarIdade(18));
console.log(Pessoa.verificarIdade(17));
