import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;

  height: 8rem;
`;

export const Content = styled.div`
  max-width: 1100px;

  padding: 0 2rem;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #3333331f;

  a {
    color: #e03127;

    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;

    padding: 1rem;
    border-radius: 2rem;
    border: solid 2px #e03127;

    transition: background-color 0.25s;
    transition: color 0.25s;

    &:hover {
      color: #fff;
      background-color: #e03127;
    }
  }
`;
