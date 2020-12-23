import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiBook } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import ClassUnifyService from '../../services/ClassUnifyService';

import { Container, TopBar } from './styles';

const Redirect: React.FC = () => {
  const {
    params: { student_id },
  } = useRouteMatch<{ student_id: string }>();

  const [isLoading, setIsLoading] = useState(true);
  const [classWithoutLink, setClassWithoutLink] = useState(false);

  useEffect(() => {
    const classUnifyService = ClassUnifyService.getInstance();

    classUnifyService.getNextClassInformation(student_id).then((response) => {
      setIsLoading(false);

      if (!response.data.link) {
        setClassWithoutLink(true);
      } else {
        window.location.href = response.data.link;
      }
    });
  }, [student_id]);

  return (
    <>
      <Header />

      <Container>
        <TopBar>
          {isLoading && <Loading message="Redirecionando..." />}
          {classWithoutLink && (
            <strong>Sua próxima aula ainda não tem um link</strong>
          )}
        </TopBar>
      </Container>
    </>
  );
};

export default Redirect;
