import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="GoBarber " />
      <form>
        <h1>Faça seu cadastro</h1>
        <Input type="text" icon={FiUser} name="name" placeholder="Nome" />
        <Input type="email" icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          type="password"
          icon={FiLock}
          name="password"
          placeholder="Senha"
        />
        <Button type="button">Cadastrar</Button>
      </form>
      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
