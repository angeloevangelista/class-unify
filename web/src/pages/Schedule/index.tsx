import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  FiArrowLeft,
  FiBook,
  FiCalendar,
  FiClock,
  FiCopy,
  FiEdit,
  FiExternalLink,
  FiLink,
  FiTrash2,
  FiKey,
} from 'react-icons/all';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import * as datefns from 'date-fns';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import variables from '../../config/variables';
import ClassUnifyService, {
  IClass,
  IStudent,
  IApiResponse,
} from '../../services/ClassUnifyService';
import {
  Container,
  TopBar,
  ClassForm,
  InputGroup,
  Classes,
  ClassContainer,
  ClassActions,
  InfoContainer,
} from './styles';
import keepZerosAtLeft from '../../util/keepZerosAtLeft';

const Schedule: React.FC = () => {
  const {
    params: { student_id },
  } = useRouteMatch<{ student_id: string }>();

  const uniqueLinkRef = useRef<HTMLSpanElement | null>(null);

  const [schedule, setSchedule] = useState<IClass[]>([]);
  const [classTypes, setClassTypes] = useState<{ [key: string]: string }>({});
  const [classId, setClassId] = useState<string>('');
  const [classType, setClassType] = useState('default');
  const [classDate, setClassDate] = useState('');
  const [classTime, setClassTime] = useState('');
  const [classLink, setClassLink] = useState('');

  useEffect(() => {
    const classUnifyService = ClassUnifyService.getInstance();

    if (uniqueLinkRef.current)
      uniqueLinkRef.current.innerHTML = `${variables.REACT_APP_URL}/classes/${student_id}/redirect`;

    classUnifyService.getSchedule(student_id).then((response) => {
      setSchedule(response.data);
    });

    classUnifyService.getClassTypes().then((response) => {
      setClassTypes(response.data);
    });
  }, [student_id]);

  const handleCopyUniqueLink = useCallback(() => {
    if (!uniqueLinkRef.current) return;

    const uniqueLink = uniqueLinkRef.current.textContent || '';

    const textArea = document.createElement('textarea');
    textArea.value = uniqueLink;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('Copy');

    textArea.remove();
  }, []);

  const handleClassFormSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const classUnifyService = ClassUnifyService.getInstance();
      const [year, month, day] = classDate.split('-');
      const [hours, minutes] = classTime.split(':');

      const formattedClassDate = new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hours),
        Number(minutes),
      );

      const studentClass: IClass = {
        type: classType,
        link: classLink,
        date: formattedClassDate,
      };

      let response: IApiResponse<IClass[]>;

      response = classId
        ? await classUnifyService.updateClass(student_id, classId, studentClass)
        : await classUnifyService.saveClasses(student_id, [studentClass]);

      setSchedule(response.data);

      setClassType('default');
      setClassDate('');
      setClassTime('');
      setClassLink('');
      setClassId('');
    },
    [classDate, classId, classLink, classTime, classType, student_id],
  );

  const handleCancelClass = useCallback(
    async (class_id: string) => {
      const classUnifyService = ClassUnifyService.getInstance();

      await classUnifyService.cancelClass(student_id, class_id);

      setSchedule(
        schedule.filter((studentClass) => studentClass._id !== class_id),
      );
    },
    [schedule, student_id],
  );

  const handleAddClassInformationToEdit = useCallback(
    (class_id: string) => {
      const classToEdit = schedule.find(
        (studentClass) => studentClass._id === class_id,
      );

      const date = datefns.toDate(classToEdit!.date!);

      let dateString = '';
      dateString += keepZerosAtLeft(date.getFullYear(), 4);
      dateString += '-' + keepZerosAtLeft(date.getMonth() + 1, 2);
      dateString += '-' + keepZerosAtLeft(date.getDate(), 2);

      const time =
        keepZerosAtLeft(date.getHours(), 2) +
        ':' +
        keepZerosAtLeft(date.getMinutes(), 2);

      setClassId(class_id);
      setClassType(classToEdit!.type);
      setClassDate(dateString);
      setClassTime(time);
      setClassLink(classToEdit!.link);
    },
    [schedule],
  );

  const handleClearClassEdit = useCallback(() => {
    setClassId('');
    setClassType('');
    setClassDate('');
    setClassTime('');
    setClassLink('');
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

          <h1>Agendados</h1>
        </TopBar>

        <section>
          <ClassForm onSubmit={handleClassFormSubmit}>
            <strong>{classId ? 'Editando aula' : 'Nova aula'}</strong>

            <div>
              <InputGroup>
                <div>
                  <label htmlFor="class-type-select">Tipo de aula</label>

                  <Select
                    id="class-type-select"
                    icon={FiBook}
                    value={classType}
                    onChange={(event) =>
                      setClassType(event.currentTarget.value)
                    }
                  >
                    <option value="default" disabled>
                      Selecione um tipo
                    </option>

                    {Object.keys(classTypes).map((typeKey) => (
                      <option key={typeKey} value={typeKey}>
                        {classTypes[typeKey]}
                      </option>
                    ))}
                  </Select>
                </div>
              </InputGroup>

              <InputGroup>
                <div>
                  <label htmlFor="date-input">Data</label>
                  <Input
                    id="date-input"
                    type="date"
                    value={classDate}
                    onChange={(event) =>
                      setClassDate(event.currentTarget.value)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="time-input">Hora</label>
                  <Input
                    id="time-input"
                    type="time"
                    value={classTime}
                    onChange={(event) =>
                      setClassTime(event.currentTarget.value)
                    }
                  />
                </div>
              </InputGroup>

              <InputGroup>
                <div>
                  <label htmlFor="link-input">Link</label>
                  <Input
                    id="link-input"
                    icon={FiLink}
                    placeholder="https://mindsidiomas..."
                    value={classLink}
                    onChange={(event) =>
                      setClassLink(event.currentTarget.value)
                    }
                  />
                </div>
              </InputGroup>
            </div>

            <div>
              {classId ? (
                <Button onClick={handleClearClassEdit} cancellationButton>Cancelar</Button>
              ) : (
                <div />
              )}
              <Button type="submit">Salvar</Button>
            </div>
          </ClassForm>

          <InfoContainer>
            <strong>Angelo Evangelista</strong>

            <div>
              <div>
                <strong>Nível: </strong> <span>Upper</span>
              </div>
              <div>
                <strong>Aulas agendadas: </strong> <span>3</span>
              </div>
              <div>
                <strong>Link único: </strong>
                <span ref={uniqueLinkRef}>
                  https://mindsidiomas.whereby.com/santos1
                </span>
                <FiCopy size={24} onClick={handleCopyUniqueLink} />
              </div>
            </div>
          </InfoContainer>
        </section>

        <Classes>
          {schedule.map((studentClass) => (
            <ClassContainer key={studentClass._id}>
              <div>
                <strong>{classTypes[studentClass.type]}</strong>

                <div>
                  <FiClock size={20} />
                  <p>{studentClass.date.toLocaleDateString()}</p>
                </div>

                <div>
                  <FiCalendar size={20} />
                  <p>{studentClass.date.toLocaleTimeString()}</p>
                </div>

                <div>
                  <FiLink size={20} />
                  <p>{studentClass.link ?? 'Sem link'}</p>
                </div>
              </div>

              <ClassActions>
                <button>
                  <FiEdit
                    size={24}
                    onClick={() =>
                      handleAddClassInformationToEdit(studentClass._id!)
                    }
                  />
                </button>
                <button>
                  <FiTrash2
                    size={24}
                    onClick={() => handleCancelClass(studentClass._id!)}
                  />
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
