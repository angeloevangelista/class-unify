import { darken } from 'polished';
import styled from 'styled-components';

interface IContainerProps {
  cancellationButton: boolean;
}

export const Container = styled.button<IContainerProps>`
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 0.4rem;

  /* text-transform: uppercase; */
  font-weight: bold;

  color: #fff;
  background-color: ${(props) =>
    props.cancellationButton ? '#a9322c' : '#003180'};

  transition: color 0.25s;
  transition: background-color 0.25s;

  &:hover {
    background-color: ${(props) =>
      props.cancellationButton
        ? darken(0.1, '#a9322c')
        : darken(0.1, '#003180')};
  }
`;
