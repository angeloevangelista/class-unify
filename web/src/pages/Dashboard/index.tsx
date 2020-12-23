import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronRight, FiSearch, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';

import ClassUnifyService, { IStudent } from '../../services/ClassUnifyService';

import { Container, TopBar, Students } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [students, setStudents] = useState<IStudent[]>([]);

  useEffect(() => {
    const classUnifyService = ClassUnifyService.getInstance();

    classUnifyService.getStudents().then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  }, []);

  const handleNavigateToNewStudent = useCallback(() => {
    history.push('new-student');
  }, [history]);

  return (
    <>
      <Header />

      <Container>
        <TopBar>
          <div>
            <h1>Alunos</h1>
            <Input icon={FiSearch} placeholder="Digite para filtrar" />
          </div>

          <Button onClick={handleNavigateToNewStudent}>Novo aluno</Button>
        </TopBar>

        <Students>
          {students.map((student) => (
            <Link key={student._id} to={`/schedule/${student._id}`}>
              <FiUser size={48} />

              <div>
                <strong>{student.name}</strong>
                <p>
                  {student.grade} - {student.classes.length} aula(s)
                </p>
              </div>
              <FiChevronRight size={24} />
            </Link>
          ))}
        </Students>
      </Container>
    </>
  );
};

export default Dashboard;

// #ff2d22
// #002257
// #ffffff
