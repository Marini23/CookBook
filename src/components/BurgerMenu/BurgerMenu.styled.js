import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;
  font-size: 36px;
  line-height: 36px;
  font-weight: 400;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    font-size: 48px;
    line-height: 36px;
    margin-bottom: 48px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 64px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    gap: 40px;
  }
  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 35.25px;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    font-size: 36px;
    line-height: 36px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const LinkRecipes = styled(NavLink)`
  text-decoration: none;
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
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 36px;
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
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const Home = styled.p`
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
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 36px;
  }
`;
