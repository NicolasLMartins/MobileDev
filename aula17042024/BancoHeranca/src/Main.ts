import { Banco } from "./types/classes/Banco";

const cliente = new Banco(20, "Eduardo", "123.123.123-12", 5000);

console.log(cliente.toString());