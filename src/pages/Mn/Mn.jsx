import './Mn.css';
import { Cabecalho } from '../../componentes/Cabecalho';
import { Lateral } from '../../componentes/Lateral';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';


export function Mn() {
    return (
        <div className='gridConteiner'>
            <Cabecalho />
            <Lateral />

            <div className='conteudo'>
                <Link to="/Classe" className="backLink">
                    <ArrowLeft size={24} weight="bold" />
                    <h1>Classes</h1>
                </Link>

                <Link to="/mn/option1" className='linha'>
                    1° MN
                </Link>
                <Link to="/mn/option2" className='linha'>
                    2° MN
                </Link>
                <Link to="/mn/option3" className='linha'>
                    3° MN
                </Link>
            </div>
        </div>
    );
}
