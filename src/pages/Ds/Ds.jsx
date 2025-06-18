import './Ds.css';
import { Cabecalho } from '../../componentes/Cabecalho';
import { Lateral } from '../../componentes/Lateral';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';


export function Ds() {
    return (
        <div className='gridConteiner'>
            <Cabecalho />
            <Lateral />

            <div className='conteudo'>
                <Link to="/Classe" className="backLink">
                    <ArrowLeft size={24} weight="bold" />
                    <h1>Classes</h1>
                </Link>
                
                <Link to="/ds/option1" className='linha'>
                    1° DS - A
                </Link>
                <Link to="/ds/option2" className='linha'>
                    1° DS - B
                </Link>
                <Link to="/ds/option3" className='linha'>
                    2° DS - A
                </Link>
                <Link to="/ds/option4" className='linha'>
                    2° DS - B
                </Link>
                <Link to="/ds/option5" className='linha'>
                    3° DS - A
                </Link>
                <Link to="/ds/option6" className='linha'>
                    3° DS - B
                </Link>

            </div>
        </div>
    );
}
