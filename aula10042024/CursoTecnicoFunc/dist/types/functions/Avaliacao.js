"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avaliacao = void 0;
function avaliacao(alunos) {
    alunos.forEach(aluno => {
        let resultado = "NÃO APTO";
        if (aluno._atividadesEnviadas >= aluno._quantidadeAtividades / 2) {
            resultado = "APTO";
        }
        console.log(`Nome do aluno: ${aluno._nomeAluno}, Atividades realizadas: ${aluno._atividadesEnviadas}, Atividades totais: ${aluno._quantidadeAtividades}, Resultado: ${resultado}`);
    });
}
exports.avaliacao = avaliacao;
