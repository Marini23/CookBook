import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 366px;
  height: 37px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.primaryBlackText};
  font-size: 14px;
  line-height: 20.56px;
  margin-top: 24px;
  margin-bottom: 32px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }
  @media screen and (min-width: 744px) {
  }
`;
