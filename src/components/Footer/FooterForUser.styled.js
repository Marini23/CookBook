import styled from 'styled-components';

import bg from '../../images/bg_footer_desktop.jpg';

export const Container = styled.footer`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  background-image: linear-gradient(
      rgba(25, 25, 25, 0.5),
      rgba(25, 25, 25, 0.5)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    gap: 20px;
    padding: 24px 0;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    gap: 0;
    padding: 83px 0 64px 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 4px;
  }
`;

export const Img = styled.img`
  width: 48px;
  height: 32px;
  @media screen and (min-width: 768px) {
    width: 92px;
    height: 60px;
  }
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
  @media screen and (min-width: 768px) {
    font-size: 14px;
    font-weight: 20.56px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 20.56px;
    margin-top: 56px;
  }
`;

export const Link = styled.a`
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
    font-size: 14px;
    font-weight: 20.56px;
  }
`;

export const List = styled.ul`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-top: 64px;
    gap: 64px;
  }
`;

export const LinkItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 35.25px;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 35.25px;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
`;
