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

export const Banner = styled.picture`
  display: none;
  @media screen and (min-width: 744px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 744px;
    height: 291px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 443px;
  }
`;
