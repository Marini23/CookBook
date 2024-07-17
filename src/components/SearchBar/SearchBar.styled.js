import styled from 'styled-components';

export const SearchForm = styled.form`
  @media screen and (min-width: 744px) {
    display: flex;
    align-items: center;
    width: 316px;
    height: 32px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.whiteText};
  }
  @media screen and (min-width: 1440px) {
    width: 480px;
    height: 40px;
  }
`;

export const Input = styled.input`
  @media screen and (min-width: 744px) {
    display: inline-block;
    cursor: pointer;
    width: 284px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.whiteText};
    outline: none;
    border-radius: 4px 0 0 4px;
    border: none;
    padding: 6px 16px;
    font-size: 14px;
    line-height: 20.56px;
    color: ${({ theme }) => theme.colors.primaryBlackText};
    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
  @media screen and (min-width: 1440px) {
    width: 440px;
    height: 40px;
    padding: 11px 24px;
    font-size: 16px;
    line-height: 23.5px;
  }
`;

export const Button = styled.button`
  @media screen and (min-width: 744px) {
    cursor: pointer;
    width: 32px;
    height: 32px;
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
  }
  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;
