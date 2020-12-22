import React from 'react';
import { FiChevronRight, FiSearch, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, TopContent, Students } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <TopContent>
          <div>
            <h1>Alunos</h1>
            <Input icon={FiSearch} placeholder="Digite para filtrar" />
          </div>

          <Button>Novo aluno</Button>
        </TopContent>

        <Students>
          <Link to={`/schedule/angeloevangelista`}>
            <FiUser size={48} />

            <div>
              <strong>Angelo evangelista</strong>
              <p>Upper - 3 aula(s)</p>
            </div>
            <FiChevronRight size={24} />
          </Link>
          <Link to={`/schedule/angeloevangelista`}>
            <FiUser size={48} />

            <div>
              <strong>Angelo evangelista</strong>
              <p>Upper - 1 aula(s)</p>
            </div>
            <FiChevronRight size={24} />
          </Link>
        </Students>
      </Container>
    </>
  );
};

export default Dashboard;

// #ff2d22
// #002257
// #ffffff
