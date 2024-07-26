import styled from 'styled-components';

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
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    font-size: 36px;
    line-height: 36px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 36px;
  }
`;
