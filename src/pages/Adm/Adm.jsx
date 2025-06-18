import './Adm.css';
import { Cabecalho } from '../../componentes/Cabecalho';
import { Lateral } from '../../componentes/Lateral';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';

export function Adm() {
    return (
        <div className='gridConteiner'>
            <Cabecalho />
            <Lateral />

            <div className='conteudo'>
                <Link to="/Classe" className="backLink">
                    <ArrowLeft size={24} weight="bold" /> 
                    <h1>Classes</h1>
                </Link>

                <Link to="/adm/option1" className='linha'>
                    1° MA - A
                </Link>
                <Link to="/adm/option2" className='linha'>
                    1° MA - B
                </Link>
                <Link to="/adm/option3" className='linha'>
                    2° MA - A
                </Link>
                <Link to="/adm/option4" className='linha'>
                    2° MA - B
                </Link>
                <Link to="/adm/option5" className='linha'>
                    3° MA - A
                </Link>
                <Link to="/adm/option6" className='linha'>
                    3° MA - B
                </Link>

            </div>
        </div>
    );
}
