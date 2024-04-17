import { Pessoa } from "./types/classes/Pessoa";

for (let i = 0; i < 3; i++) {
    const idadeAleatoria = Math.floor(Math.random() * 100);
    const pessoa = new Pessoa();
    pessoa.imprimirIdade(idadeAleatoria);
}