import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 35.25px;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  cursor: pointer;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding-left: 14px;
  line-height: 23.5px;
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
`;

export const Line = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 12px;
  line-height: 17.63px;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
  margin-bottom: 20px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 26.44px;
  }
`;

export const NetworkBtnSubmit = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  font-size: 12px;
  line-height: 17.63px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 23.5px;
  }
`;

export const LinkText = styled.p`
  font-size: 14px;
  font-weight: 20.56px;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 29.38px;
  }
`;


export const Link = styled.span`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 20.56px;
  color: ${({ theme }) => theme.colors.primaryOrange};
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 29.38px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 17.63px;
  color: ${({ theme }) => theme.colors.primaryBlackText};
`;
