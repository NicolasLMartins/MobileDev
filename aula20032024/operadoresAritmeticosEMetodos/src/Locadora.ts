// Enunciado: Crie uma classe chamada locadora que recebe valores nas variáveis: modelo-carro, ano-carro,
// valor-diaria, qtd-dias, valor-total.
// Faça um método que imprima na tela o modelo-carro, ano-carro e o valor-total.
interface ValorDiario {
    [modeloAno: string]: number;
}

enum ModeloCarro {
    TOYOTA_COROLLA = "Toyota Corolla",
    VOLKSWAGEN_JETTA = "Volkswagen Jetta",
    FIAT_UNO = "Fiat Uno",
}

class Locadora {
    private _modeloCarro!: string;
    private _anoCarro!: number;
    private _qtdDias!: number;
    private _valoresDiarios: ValorDiario;
    private _valorTotal!: number;

    constructor() {
        this._valoresDiarios = {
            [`${ModeloCarro.TOYOTA_COROLLA}_2024`]: 150000,
            [`${ModeloCarro.VOLKSWAGEN_JETTA}_2016`]: 70000,
            [`${ModeloCarro.FIAT_UNO}_1999`]: 40000,
        };
    }

    public alugarCarro(modelo: ModeloCarro, ano: number, qtdDias: number): void {
        const chave = `${modelo}_${ano}`;
        if (!(chave in this._valoresDiarios)) {
            console.log(`O ano ${ano} não está cadastrado para o modelo ${modelo}`);
            return;
        }

        this._modeloCarro = modelo;
        this._anoCarro = ano;
        this._qtdDias = qtdDias;
        this._valorTotal = this.valorTotal();
    };

    private valorTotal(): number {
        const chave = `${this._modeloCarro}_${this._anoCarro}`
        const valorDiario = this._valoresDiarios[chave];
        return this._qtdDias * valorDiario;
    }

    public imprimirInformacoes(): void {
        console.log(`Modelo e ano do carro alugado: ${this._modeloCarro}, ${this._anoCarro}. Valor total: R$ ${this._valorTotal.toFixed(2)}`);
    }
}

const locadora = new Locadora();

locadora.alugarCarro(ModeloCarro.TOYOTA_COROLLA, 2024, 2);
locadora.imprimirInformacoes();

locadora.alugarCarro(ModeloCarro.VOLKSWAGEN_JETTA, 2016, 2);
locadora.imprimirInformacoes();

locadora.alugarCarro(ModeloCarro.FIAT_UNO, 1999, 2);
locadora.imprimirInformacoes();