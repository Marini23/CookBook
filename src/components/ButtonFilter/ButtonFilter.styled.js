import styled from 'styled-components';

export const BtnFilter = styled.button`
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
