class Retangulo {
    private _largura: number;
    private _altura: number;

    constructor(
        largura: number,
        altura: number
    ) {
        this._largura = largura;
        this._altura = altura;
    }

    public isSquare(): string {
        if (this._largura === this._altura) {
            return "O desenho É um quadrado.";
        } else {
            return "O desenho NÃO é um quadrado.";
        }
    }

    set largura(novaLargura: number) {
        this._largura = novaLargura;
    }

    set altura(novaAltura: number) {
        this._altura = novaAltura;
    }
}

const retangulo = new Retangulo(5, 5);

console.log(retangulo.isSquare());

retangulo.largura = 6;
retangulo.altura = 4;

console.log(retangulo.isSquare());
