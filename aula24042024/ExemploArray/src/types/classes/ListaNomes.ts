export class ListaNomes {
    private _nomes: string[];

    constructor() {
        this._nomes = ["Eduardo", "Larah", "Nícolas", "Lucas"];
    }

    public exibirNomes(): void {
        console.log("Nomes: ");
        
        this._nomes.forEach(nome => {
            console.log(nome);
        });
    }
}