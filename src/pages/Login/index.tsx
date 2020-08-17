import React from "react";
import { Container } from "./style";
import { Input, Button } from "../../components";
import Logo from "../../assets/logo-black.png";

const Login: React.FC = () => {
  return (
    <Container>
      <form action="">
        <div className="logo">
          <img src={Logo} alt="Logo enContact" />
        </div>
        <Input name="text" type="email" label="Email" />
        <Input name="password" type="password" label="Senha" />
        <div>
          <Button type="text">Esqueceu sua senha?</Button>
          <Button>Entrar</Button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
