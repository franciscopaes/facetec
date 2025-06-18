import './Cabecalho.css';
import { SignOut } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { autenticacao } from '../services/firebaseConfig';

export function Cabecalho() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(autenticacao); 
        navigate('/'); 
    };

    return (
        <header className="conteinerCabecalho">
            <p>FACETEC</p>
            <div className="logoutContainer" onClick={handleLogout}>
                <SignOut size={24} className="logoutIcon" />
                <span className="tooltipText">Deslogar/Sair</span>
            </div>
        </header>
    );
}
