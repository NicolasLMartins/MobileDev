"use strict";
class Animal {
    static verificarEspecie(nome) {
        switch (nome) {
            case "Gato":
            case "Cachorro":
                return "Mamífero";
            case "Papagaio":
            case "Águia":
                return "Ave";
            case "Tubarão":
            case "Atum":
                return "Peixe";
            default:
                return "Desconhecido";
        }
    }
}
console.log(Animal.verificarEspecie("Gato"));
console.log(Animal.verificarEspecie("Cachorro"));
console.log(Animal.verificarEspecie("Papagaio"));
console.log(Animal.verificarEspecie("Águia"));
console.log(Animal.verificarEspecie("Tubarão"));
console.log(Animal.verificarEspecie("Atum"));
console.log(Animal.verificarEspecie("Galinha"));
