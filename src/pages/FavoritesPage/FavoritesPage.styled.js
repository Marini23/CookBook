import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 128px;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 744px) {
    max-width: 744px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-top: 159px;
  }
`;

export const ImgAddRecipe = styled.img`
  width: 366px;
  height: 261px;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 32px;
`;
