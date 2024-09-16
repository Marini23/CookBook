import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 128px;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 744px;
    padding-top: 61px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-top: 159px;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: ${({ $isvisible }) => ($isvisible ? '443px' : '0')};
  transition: max-height 1s ease-in-out;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    max-height: ${({ $isvisible }) => ($isvisible ? '493px' : '0')};
  }
`;
