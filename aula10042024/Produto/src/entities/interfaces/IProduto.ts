export interface Produto {
    _nome: string;
    _preco: number;

    calcularDesconto(): number;
}