// Enunciado: Crie uma classe chamada Retangulo que tenha as propriedades
// largura e altura, e um método que retorne a área do retângulo. 
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

    private areaTotal(): number {
        return this._largura * this._altura; 
    };

    public toString(): string {
        return `Largura: ${this._largura}, Altura: ${this._altura}, Área total: ${this.areaTotal()}`;
    }

    set largura(novaLargura: number) {
        this._largura = novaLargura;
    }

    set altura(novaAltura: number) {
        this._altura = novaAltura;
    }
}

const retangulo = new Retangulo(5, 10);

console.log(retangulo.toString());

retangulo.largura = 4;
retangulo.altura = 5;

console.log(retangulo.toString());