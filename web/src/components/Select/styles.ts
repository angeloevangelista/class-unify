import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;

  border: solid 1px #ddd;
  border-radius: 0.4rem;
`;

export const SelectElement = styled.select`
  width: 100%;
  padding: 0 1rem;

  font-size: 1.8rem;

  border: 0;
  outline-style: none;
  background: transparent;

  color: #002257;

  option {
    margin: 2rem;

    & + option {
      margin-top: 1rem;
    }
  }
`;
