"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Avaliacao_1 = require("./types/functions/Avaliacao");
const alunos = [
    { _nomeAluno: "Eduardo", _atividadesEnviadas: 6, _quantidadeAtividades: 12 },
    { _nomeAluno: "Larah", _atividadesEnviadas: 5, _quantidadeAtividades: 12 },
    { _nomeAluno: "Nícolas", _atividadesEnviadas: 7, _quantidadeAtividades: 12 }
];
(0, Avaliacao_1.avaliacao)(alunos);
