import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiBook } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import ClassUnifyService from '../../services/ClassUnifyService';

import { Container, TopBar, StudentForm, InputGroup } from './styles';

const NewStudent: React.FC = () => {
  const {
    params: { student_id },
  } = useRouteMatch<{ student_id: string }>();

  const [grades, setGrades] = useState<{ [key: string]: string }>({});
  const [grade, setGrade] = useState('default');

  useEffect(() => {
    const classUnifyService = ClassUnifyService.getInstance();

    classUnifyService.getClassTypes().then((response) => {
      setGrades(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <Container>
        <TopBar>
          <Link to="/">
            <FiArrowLeft size={24} />
            Voltar
          </Link>

          <h1>Novo aluno</h1>
        </TopBar>

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
              <Select
                id="class-type-select"
                icon={FiBook}
                value={grade}
                onChange={(event) => setGrade(event.currentTarget.value)}
              >
                <option value="default" disabled>
                  Selecione um nível
                </option>

                {Object.keys(grades).map((gradeKey) => (
                  <option key={gradeKey} value={gradeKey}>
                    {grades[gradeKey]}
                  </option>
                ))}
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
