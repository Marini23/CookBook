import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bgFooter};
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
`;

export const Img = styled.img`
  width: 48px;
  height: 32px;
`;

export const FooterText = styled.p`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 14.96px;
  color: ${({ theme }) => theme.colors.footerText};
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 14.96px;
  color: ${({ theme }) => theme.colors.footerText};
  &:hover {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryBlackText};
  }
  &:focus {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryBlackText};
  }
  /* @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: nowrap;
    width: 305px;
    max-width: 305px;
    height: 45px;
    font-size: 20px;
    line-height: 29.38px;
    margin-bottom: 40px;
  } */
`;
