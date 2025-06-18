import './Lateral.css'; 
import { Link } from 'react-router-dom';
import foto from '../assets/logofacetec.png';
import { useState, useEffect } from 'react';
import { autenticacao, firestore } from '../services/firebaseConfig'; // Certifique-se de importar o Firestore
import { doc, getDoc } from 'firebase/firestore'; // Métodos do Firestore

export function Lateral() {
    const [userName, setUserName] = useState('Usuário'); // Estado para armazenar o nome do usuário

    useEffect(() => {
        const fetchUserName = async () => {
            const user = autenticacao.currentUser;
            if (user) {
                // Recupera o nome do usuário do Firestore
                const docRef = doc(firestore, 'users', user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUserName(docSnap.data().nome); // Define o nome do usuário
                } else {
                    console.log("Nenhum documento encontrado!");
                }
            }
        };

        fetchUserName();
    }, []);

    return (
        <aside className='conteinerLateral'>
            <header>
                <div className='perfil'>
                    <img className='avatar' src={foto} alt="Avatar do Usuário" />
                    <strong>{userName}</strong> {/* Exibe o nome do usuário */}
                </div>
            </header>
            <section className='opcoes'>
                <Link className='botao' to='/geral'>
                    <strong>Geral</strong>
                </Link>

                <Link className='botao' to='/classe'>
                    <strong>Classes</strong>
                </Link>

                <Link className='botao' to='/alunos'>
                    <strong>Alunos</strong>
                </Link>
            </section>
        </aside>
    );
}
