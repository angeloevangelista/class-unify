import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  /* height: 100%; */
  width: 100%;
  max-width: 1100px;

  padding: 0 2rem;
  margin: 2rem auto 0 auto;
`;

export const TopContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #002257;

    font-size: 1.8rem;
    text-decoration: none;

    padding: 0.4rem 1.4rem;
    border-radius: 2rem;

    transition: box-shadow 0.25s;

    &:hover {
      box-shadow: 0 0 1px 1px #002257;
    }

    svg {
      margin-right: 0.4rem;
    }
  }
`;

export const StudentForm = styled.form`
  max-width: 600px;
  margin: 8rem auto 0 auto;

  padding: 2rem;

  border-radius: 0.4rem;
  border: solid #eee 1px;

  strong {
    font-size: 2rem;
  }

  > div {
    margin: 1rem 0;
  }

  button {
    margin-left: auto;
  }
`;

export const InputGroup = styled.div`
  display: flex;

  & + div {
    margin-top: 0.8rem;
  }

  > div {
    width: 100%;
    margin: 0.4rem;
  }
`;
