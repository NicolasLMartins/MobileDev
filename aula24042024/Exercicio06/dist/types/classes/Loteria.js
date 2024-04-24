"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loteria = void 0;
class Loteria {
    sorteio() {
        return Math.ceil(Math.random() * 100);
    }
}
exports.Loteria = Loteria;
