// PRIMITIVOS
const stringTest: string = "Isso é uma string.";                        // Representa sequências de caracteres

const numberTest1: number = 500;                                        // Representa números, sejam inteiros ou decimais
const numberTest2: number = 500.25;

const isBool: boolean = true;                                           // Representa um valor booleano, verdadeiro ou falso

// ARRAYS E TUPLAS
const arrayTest1: string[] = ["Teste1", "Teste2"]                       // Representa uma coleção de valores do mesmo tipo e é declarado colocando '[]' 
                                                                        // após o tipo dos elementos ou simplesmente atribuindo um array à variável
const arrayTest2: number[] = [1, 2, 3.5, 4]
const arrayTest3: number[] = Array(2);                                  // [undefined, undefined]
const arrayTest4: number[] = Array(2, 2);                               // [1, 2]

const tupleTest1: [string, number, boolean] = ["Teste", 4.5, false];    // Representa um array com um número fixo de elementos onde
                                                                        // cada um pode ter um tipo diferente


// ENUM
enum DiaDaSemana {                                                      // Representa um conjunto de constantes nomeadas e indexadas
    Domingo = 0,
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6
}

const enumTest: DiaDaSemana = DiaDaSemana.Quarta;

const anyTest1: any = "Teste";                                          // Tipo padrão quando uma variável não é tipada,
                                                                        // pode representar qualquer tipo
const anyTest2: any = ["Teste", 1.5, true];
const anyTest3: any = 250.50;
const anyTest4: any = true;