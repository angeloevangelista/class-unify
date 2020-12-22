import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Minds Idiomas" />

        <a
          href="https://mindsidiomas.com.br/quero-desconto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Estude com desconto
        </a>
      </Content>
    </Container>
  );
};

export default Header;
