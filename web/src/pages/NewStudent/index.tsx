import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiBook } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, TopContent, StudentForm, InputGroup } from './styles';

const NewStudent: React.FC = () => {
  const {
    params: { student_id },
  } = useRouteMatch<{ student_id: string }>();

  return (
    <>
      <Header />

      <Container>
        <TopContent>
          <Link to="/">
            <FiArrowLeft size={24} />
            Voltar
          </Link>

          <h1>Novo aluno</h1>
        </TopContent>

        <StudentForm>
          <strong>Preencha os campos</strong>

          <div>
            <InputGroup>
              <Input icon={FiUser} placeholder="Nome" />
            </InputGroup>

            <InputGroup>
              <Input icon={FiMail} placeholder="Email" type="email" />
            </InputGroup>
            
            <InputGroup>
              <Select icon={FiBook}>
                <option selected disabled>
                  Escolha um nível
                </option>
                <option value="Starter">Starter</option>
                <option value="Basic">Basic</option>
                <option value="Inter">Intermediate</option>
                <option value="Upper">Upper</option>
                <option value="UpperPlus">Upper Plus</option>
              </Select>
            </InputGroup>
          </div>

          <Button type="submit">Adicionar</Button>
        </StudentForm>
      </Container>
    </>
  );
};

export default NewStudent;
