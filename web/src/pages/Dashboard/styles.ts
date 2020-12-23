import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  /* height: 100%; */
  width: 100%;
  max-width: 1100px;

  padding: 0 2rem;
  margin: 2rem auto 0 auto;
`;

export const TopBar = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  button {
    margin: 1rem 0;
  }
`;

export const Students = styled.div`
  margin-top: 6rem;
  max-width: 700px;

  a {
    width: 100%;

    display: flex;
    align-items: center;

    text-decoration: none;
    background: #fff;

    padding: 2rem;
    border-radius: 0.4rem;
    border: solid #eee 1px;

    transition: transform 0.25s;

    & + a {
      margin-top: 2rem;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 2rem;
      flex: 1;

      strong {
        font-size: 2rem;
        color: #002257;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8b3;
        margin-top: 0.4rem;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
