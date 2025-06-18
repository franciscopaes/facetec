import './Alunos.css';
import { Cabecalho } from '../../componentes/Cabecalho';
import { Lateral } from '../../componentes/Lateral';
import { useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

export function Alunos() {
    const [busca, setBusca] = useState('');
    const [alunos] = useState([
        { nome: 'Thiago Francisco', status: 'Presente' },
        { nome: 'Nathan Rogerio', status: 'Ausente' },
    ]);

    const alunosFiltrados = alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className='gridConteiner'>
            <Cabecalho />
            <Lateral />
            <div className='mainContent'>
                <h1>Buscar Aluno</h1>

                <div className="searchContainer">
                    <input
                        type="text"
                        placeholder="Digite o nome do aluno"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />
                    <button className="searchButton" type="button" title="Buscar">
                        <MagnifyingGlass size={20} weight="bold" />
                    </button>
                </div>

                {busca && (
                    <table className="alunosTable">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunosFiltrados.length > 0 ? (
                                alunosFiltrados.map((aluno, index) => (
                                    <tr key={index}>
                                        <td>{aluno.nome}</td>
                                        <td>{aluno.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2">Nenhum aluno encontrado.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
