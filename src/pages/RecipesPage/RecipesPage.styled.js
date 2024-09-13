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
  @media screen and (min-width: 744px) {
    max-width: 744px;
    padding-top: 61px;
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
    width: 744px;
    height: 291px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 443px;
  }
`;

export const FilterDesktop = styled.div`
  display: none;
  @media screen and (min-width: 744px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  /* @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    position: relative;
  } */
`;

export const ButtonFilter = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 20.56px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }
  @media screen and (min-width: 1440px) {
    height: 64px;
    font-size: 20px;
    line-height: 29.38px;
  }
`;

export const TextButtonFilter = styled.span`
  width: 120px;
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (min-width: 1440px) {
    width: 200px;
  }
`;

export const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 16px;
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
