import { Loteria } from "./types/classes/Loteria";

let loterias: Loteria[] = [];

for (let i = 0; i < 6; i++) {
    loterias[i] = new Loteria();
    console.log(loterias[i].sorteio());
}