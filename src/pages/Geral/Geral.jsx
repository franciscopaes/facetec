import React, { useState, useEffect } from 'react';
import './Geral.css';
import { Cabecalho } from '../../componentes/Cabecalho';
import { Lateral } from '../../componentes/Lateral';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Geral() {
    const [totalAlunosHoje, setTotalAlunosHoje] = useState(0);

    
    const [presencaSemana, setPresencaSemana] = useState([
        { day: 'Segunda', presentes: 120 },
        { day: 'Terça', presentes: 150 },
        { day: 'Quarta', presentes: 130 },
        { day: 'Quinta', presentes: 140 },
        { day: 'Sexta', presentes: 90 },
    ]);

    useEffect(() => {
        
        setTotalAlunosHoje(160);
    }, []);

    
    const COLORS = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'];

    return (
        <div className='gridConteiner'>
            <Cabecalho />
            <Lateral />
            <div className='mainContent'>
                <h1>Geral</h1>

                <div className="totalAlunosContainer">
                    <h2>Total de Alunos Presentes Hoje</h2>
                    <p>{totalAlunosHoje}</p>
                </div>

                <div className="graficoContainer">
                    <h2>Presença de Alunos Durante a Semana</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={presencaSemana}
                                dataKey="presentes"
                                nameKey="day"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {presencaSemana.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default Geral;
