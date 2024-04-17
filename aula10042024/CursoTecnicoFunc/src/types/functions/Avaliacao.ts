import { CursoTecnico } from "../interfaces/ICursoTecnico";

export function avaliacao(alunos: CursoTecnico[]) {
    alunos.forEach(aluno => {
        let resultado: string = "NÃO APTO";
        
        if (aluno._atividadesEnviadas >= aluno._quantidadeAtividades / 2) {
            resultado = "APTO";
        }

        console.log(`Nome do aluno: ${aluno._nomeAluno}, Atividades realizadas: ${aluno._atividadesEnviadas}, Atividades totais: ${aluno._quantidadeAtividades}, Resultado: ${resultado}`);
    });
}