import styled from 'styled-components';

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 54px;
  font-size: 64px;
  line-height: 64px;
  font-weight: 400;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;
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

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  line-height: 36px;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 1440px) {
  }
`;
