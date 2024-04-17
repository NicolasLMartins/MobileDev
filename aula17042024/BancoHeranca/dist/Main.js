"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Banco_1 = require("./types/classes/Banco");
const cliente = new Banco_1.Banco(20, "Eduardo", "123.123.123-12", 5000);
console.log(cliente.toString());
