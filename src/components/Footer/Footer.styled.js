import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.bgFooterBlack};
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    gap: 32px;
    padding: 36px 0;
  }
`;

export const Img = styled.img`
  width: 48px;
  height: 32px;
  @media screen and (min-width: 1440px) {
    width: 166px;
    height: 112px;
  }
`;

export const FooterText = styled.p`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 14.96px;
  color: ${({ theme }) => theme.colors.footerText};
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    font-weight: 23.5px;
  }
`;

export const Link = styled.a`
  /* text-decoration: none; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 14.96px;
  color: ${({ theme }) => theme.colors.footerText};
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    font-weight: 23.5px;
  }
`;
