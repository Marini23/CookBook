import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 112px;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 744px) {
    max-width: 744px;
    padding-top: 61px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-top: 159px;
  }
`;
