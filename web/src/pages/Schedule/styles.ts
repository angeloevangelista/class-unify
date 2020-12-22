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

export const ClassForm = styled.form`
  margin-top: 4rem;
  max-width: 600px;

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

    label {
      display: block;
      margin-bottom: 0.4rem;
    }
  }
`;

export const Classes = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 4rem 0;
`;

export const ClassContainer = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  flex: 1 1 500px;

  /* flex-wrap: wrap-reverse; */

  text-decoration: none;
  background: #fff;

  padding: 0.8rem 0;
  border-radius: 0.4rem;
  border: solid #eee 1px;

  margin: 1rem;

  /* transition: 5s; */
  transition: box-shadow 0.25s;

  &:hover {
    /* transform: scale(1.025); */
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  }

  & + div {
    /* margin-top: 2rem; */
  }

  > div {
    margin: 0 2rem;
    flex: 1;

    strong {
      display: block;
      font-size: 2rem;
      color: #002257;
    }

    div {
      margin-top: 1rem;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      & + div {
        margin-top: 0.8rem;
      }

      svg {
        margin-right: 1rem;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8b3;
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ClassActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    padding: 0.8rem;
    border-radius: 0.4rem;
    outline-color: ${lighten(0.1, '#002257')};
    background: transparent;

    transition: background-color 0.25s;

    color: #002257;

    &:hover {
      background-color: #ddd;
    }
  }

  @media (max-width: 700px) {
    & {
      flex-direction: row;
      align-self: flex-end;
    }
  }
`;
