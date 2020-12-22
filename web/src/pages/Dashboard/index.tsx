import React, { useCallback } from 'react';
import { FiChevronRight, FiSearch, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, TopContent, Students } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleNavigateToNewStudent = useCallback(() => {
    history.push('new-student');
  }, [history]);

  return (
    <>
      <Header />

      <Container>
        <TopContent>
          <div>
            <h1>Alunos</h1>
            <Input icon={FiSearch} placeholder="Digite para filtrar" />
          </div>

          <Button onClick={handleNavigateToNewStudent}>Novo aluno</Button>
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
