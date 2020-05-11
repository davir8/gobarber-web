import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber " />
      <form>
        <h1>Faça seu logon</h1>
        <Input type="email" icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          type="password"
          icon={FiLock}
          name="password"
          placeholder="Senha"
        />
        <Button type="button">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
