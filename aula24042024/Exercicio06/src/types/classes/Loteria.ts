export class Loteria {
    public sorteio(): number {
        return Math.ceil(Math.random() * 100);
    }
}