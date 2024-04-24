"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Loteria_1 = require("./types/classes/Loteria");
let loterias = [];
for (let i = 0; i < 6; i++) {
    loterias[i] = new Loteria_1.Loteria();
    console.log(loterias[i].sorteio());
}
