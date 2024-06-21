import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 480px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.whiteText};
`;

export const Input = styled.input`
  display: inline-block;
  cursor: pointer;
  width: 440px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.whiteText};
  outline: none;
  border-radius: 4px 0 0 4px;
  border: none;
  padding: 11px 24px;
  font-size: 16px;
  line-height: 23.5px;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  border-radius: 4px;
  &:hover {
    background-color: #b1b0b2;
  }
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    border: 1px solid ${({ theme }) => theme.colors.whiteText};
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;
