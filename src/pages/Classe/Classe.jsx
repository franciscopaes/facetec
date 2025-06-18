import './Classe.css';
import { Cabecalho } from '../../componentes/Cabecalho';
import { Lateral } from '../../componentes/Lateral';
import { Link } from 'react-router-dom';

export function Classe() {
    return (
        <div className='gridConteiner'>
            <Cabecalho />
            <Lateral />
            <div className='mainContent'>
                <h1>Cursos</h1>
                <div className='optionsContainer'>
                    <Link className='optionButton' to='/adm'>
                        <strong>ADM</strong>
                    </Link>
                    <Link className='optionButton' to='/ds'>
                        <strong>DS</strong>
                    </Link>
                    <Link className='optionButton' to='/mn'>
                        <strong>MN</strong>
                    </Link>
                </div>
            </div>
        </div>
    );
}