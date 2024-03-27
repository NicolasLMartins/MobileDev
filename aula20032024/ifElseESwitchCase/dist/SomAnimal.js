"use strict";
class SomAnimal {
    static falar(animal) {
        switch (animal) {
            case "Cachorro":
                return "Au au!";
            case "Vaca":
                return "Muuuu!";
            case "Pato":
                return "Quack!";
            default:
                return "Desconhecido";
        }
    }
}
console.log(SomAnimal.falar("Cadela"));
