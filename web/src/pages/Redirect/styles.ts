import { lighten } from 'polished';
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
  align-items: center;
  justify-content: center;

  strong {
    font-size: 2.4rem;
  }
`;
