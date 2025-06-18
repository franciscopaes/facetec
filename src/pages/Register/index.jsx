import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { autenticacao, firestore } from '../../services/firebaseConfig'; // Certifique-se de que o Firestore está importado
import { doc, setDoc } from "firebase/firestore"; // Importar métodos do Firestore
import logoImg from '../../assets/facetec.png';
import { z } from 'zod';
import './index.css';

// validação
const emailSchema = z
  .string()
  .email({ message: 'Por favor, insira um endereço de e-mail válido.' });

const passwordSchema = z
  .string()
  .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' });

const formSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export function Register() {
  const [formData, setFormData] = useState({ nome: '', email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [successMessage, setSuccessMessage] = useState('');  
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(autenticacao);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const errors = result.error.format();
      setFormErrors({
        email: errors.email?._errors[0] || '',
        password: errors.password?._errors[0] || '',
      });
    } else {
      setFormErrors({ email: '', password: '' });
      try {
        const userCredential = await createUserWithEmailAndPassword(formData.email, formData.password);
        
        // Salvar o nome no Firestore
        await setDoc(doc(firestore, "users", userCredential.user.uid), {
          nome: formData.nome,
          email: formData.email,
        });

        setSuccessMessage("Cadastro feito com sucesso!");
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (e) {
        console.error("Erro ao criar a conta:", e.message);
      }
    }
  };

  return (
    <div className="conteiner">
      <header className="header">
        <img src={logoImg} alt="Facetec" className="logoImg" />
        <span>Por favor, insira suas informações para cadastro</span>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="inputC">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Thiago Rocha"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>

        <div className="inputC">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="thiago@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="mensagem">{formErrors.email}</p>}
        </div>

        <div className="inputC">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && <p className="mensagem">{formErrors.password}</p>}
        </div>

        <button className="button" type="submit" disabled={loading}>
          Cadastrar
        </button>

        {error && <p className="mensagem">Erro ao criar a conta: {error.message}</p>}
        {successMessage && <p className="mensagem sucesso">{successMessage}</p>} 

        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acesse a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
