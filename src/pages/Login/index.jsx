import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { autenticacao } from '../../services/firebaseConfig';
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

export function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(autenticacao);

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
        await autenticarUsuario(formData);
      } catch (error) {
        setAuthError('E-mail ou senha incorretos.');
      }
    }
  };

  async function autenticarUsuario(data) {
    const response = await signInWithEmailAndPassword(data.email, data.password);
    if (response) {
      setAuthError(null); 
      navigate('/inicial'); 
    }
  }

  return (
    <div className="conteiner">
      <header className="header">
        <img src={logoImg} alt="Facetec" className="logoImg" />
        <span>Seja bem-vindo!</span>
      </header>

      <form onSubmit={handleSubmit}>
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
          Entrar
        </button>

        {authError && <p className="mensagem">{authError}</p>}
        {error && <p className="mensagem">Erro ao fazer login: {error.message}</p>}

        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
