import React, { useCallback, useState } from 'react';
import { Container } from './style';
import { Input, Button, toast } from '../../components';
import { useAuth } from '../../hooks/auth';
import { Redirect } from 'react-router-dom';
import LogoWhite from '../../assets/logo.png';
import Logo from '../../assets/logo-black.png';
import { useTheme } from 'styled-components';

const Login: React.FC = () => {
  const { title } = useTheme();

  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      const { email, password } = formFields;
      if (signIn({ email, password })) {
        return <Redirect to="/dashboad" />;
      } else {
        toast.error('Email e(ou) Senha incorreto(s)!');
      }
    },
    [formFields, signIn]
  );

  function handleChange(e: any): void {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <form action="" onSubmit={(e) => handleSubmit(e)} autoComplete="no">
        <div className="logo">
          <img src={title === 'dark' ? LogoWhite : Logo} alt="Logo enContact" />
        </div>
        <Input name="email" type="text" label="Email" onChange={handleChange} />
        <Input
          name="password"
          type="password"
          label="Senha"
          onChange={handleChange}
        />
        <div>
          <Button type="text" onClick={(e: any) => e.preventDefault()}>
            Esqueceu sua senha?
          </Button>
          <Button>Entrar</Button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
