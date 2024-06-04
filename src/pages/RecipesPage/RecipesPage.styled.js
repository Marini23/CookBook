import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 159px;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
