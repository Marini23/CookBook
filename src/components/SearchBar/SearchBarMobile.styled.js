import styled from 'styled-components';

export const SearchFormMobile = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  height: 48px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  /* position: relative; */
  background-color: ${({ theme }) => theme.colors.whiteText};
  gap: 16px;
  /* border: 1px solid #b1b0b2; */
  border: none;
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 2.74px;
  &:hover {
    border: 0.2px solid #b1b0b2;
  }
  &:active {
    border: 0.2px solid #b1b0b2;
  }
`;

export const InputMobile = styled.input`
  display: inline-block;
  cursor: pointer;
  width: 100%;
  max-width: 285px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.whiteText};
  outline: none;
  border-radius: 4px 0 0 4px;
  border: none;
  font-size: 14px;
  line-height: 20.56px;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const ButtonMobile = styled.button`
  cursor: pointer;
  width: 28px;
  height: 27px;
  border: none;
  background-color: transparent;
  margin-left: auto;
  &:hover {
    background-color: rgba(244, 195, 67, 0.8);
  }
  &:active {
    outline: none;
    background-color: #a2a8bc;
    border: 0.5px solid #b1b0b2;
  }
`;

export const FilterIcon = styled.img`
  width: 27.56px;
  height: 26.73px;
  &:hover {
  }
`;

export const FilterContainer = styled.div``;
