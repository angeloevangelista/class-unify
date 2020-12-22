import React from 'react';
import {
  FiArrowLeft,
  FiBook,
  FiCalendar,
  FiClock,
  FiEdit,
  FiLink,
  FiTrash2,
} from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from '../../components/Button';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import {
  Container,
  TopContent,
  ClassForm,
  InputGroup,
  Classes,
  ClassContainer,
  ClassActions,
} from './styles';

const Schedule: React.FC = () => {
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

          <h1>Agendados</h1>
        </TopContent>

        <ClassForm>
          <strong>Nova aula</strong>

          <div>
            <InputGroup>
              <div>
                <label htmlFor="class-type-select">Tipo de aula</label>

                <Select id="class-type-select" icon={FiBook}>
                  <option selected disabled>
                    Escolha um tipo
                  </option>
                  <option value="UnitClass">Unit Class</option>
                  <option value="StarterConversation">
                    Starter Conversation
                  </option>
                  <option value="BasicConversation">Basic Conversation</option>
                  <option value="JoyConversation">Joy Conversation</option>
                  <option value="IntermediateConversation">
                    Intermediate Conversation
                  </option>
                  <option value="AdvancedConversation">
                    Advanced Conversation
                  </option>
                </Select>
              </div>
            </InputGroup>

            <InputGroup>
              <div>
                <label htmlFor="date-input">Data</label>
                <Input id="date-input" type="date" />
              </div>

              <div>
                <label htmlFor="time-input">Hora</label>
                <Input id="time-input" type="time" />
              </div>
            </InputGroup>

            <InputGroup>
              <div>
                <label htmlFor="link-input">Link</label>
                <Input
                  id="link-input"
                  icon={FiLink}
                  placeholder="https://mindsidiomas..."
                />
              </div>
            </InputGroup>
          </div>

          <Button type="submit">Salvar</Button>
        </ClassForm>

        <Classes>
          {[1, 2, 3].map((id) => (
            <ClassContainer key={id}>
              <div>
                <strong>Starter Conversation</strong>

                <div>
                  <FiClock size={20} />
                  <p>23/12/2020</p>
                </div>

                <div>
                  <FiCalendar size={20} />
                  <p>18:00</p>
                </div>

                <div>
                  <FiLink size={20} />
                  <p>https://mindsidiomas.whereby.com/santos1</p>
                </div>
              </div>

              <ClassActions>
                <button>
                  <FiEdit size={24} />
                </button>
                <button>
                  <FiTrash2 size={24} />
                </button>
              </ClassActions>
            </ClassContainer>
          ))}
        </Classes>
      </Container>
    </>
  );
};

export default Schedule;
