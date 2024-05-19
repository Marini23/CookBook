import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  /* gap: 32px; */
  margin-top: 58px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 20.56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 35.25px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 20.56px;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 29.38px;
  }
`;

export const Input = styled.input`
  width: 100%;
  cursor: pointer;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding-left: 14px;
  line-height: 23.5px;
  margin-bottom: 10px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primaryBlackText};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  height: 40px;
  border-radius: 4px;
  border: none;
  /* margin-top: 32px; */
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.primaryBlackText};
  font-size: 14px;
  line-height: 20.56px;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 26.44px;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc2f2f;
  font-size: 12px;
  margin-bottom: 32px;
`;
