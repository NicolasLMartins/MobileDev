import { avaliacao } from "./types/functions/Avaliacao";
import { CursoTecnico } from "./types/interfaces/ICursoTecnico";

const alunos: CursoTecnico[] = [
    {_nomeAluno: "Eduardo", _atividadesEnviadas: 6, _quantidadeAtividades: 12},
    {_nomeAluno: "Larah", _atividadesEnviadas: 5, _quantidadeAtividades: 12},
    {_nomeAluno: "Nícolas", _atividadesEnviadas: 7, _quantidadeAtividades: 12 }
];

avaliacao(alunos);