import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 58px;
  @media screen and (min-width: 744px) {
    margin-top: 0px;
    padding: 120px 115px 176px 115px;
  }
  @media screen and (min-width: 1440px) {
    padding: 48px 176px 48px 176px;
  }
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 20.56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 744px) {
    font-size: 20px;
    line-height: 29.38px;
    margin-bottom: 2px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
    margin-bottom: 8px;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  cursor: pointer;
  height: 40px;
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 14px 24px;
  font-size: 12px;
  line-height: 17.63px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primaryBlackText};
  }
  @media screen and (min-width: 744px) {
    max-width: 434px;
    font-size: 14px;
    line-height: 20.56px;
  }
  @media screen and (min-width: 1440px) {
    height: 48px;
    max-width: 520px;
    font-size: 16px;
    line-height: 23.5px;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.primaryBlackText};
  font-size: 14px;
  line-height: 20.56px;
  margin-top: 16px;
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
  @media screen and (min-width: 744px) {
    font-size: 16px;
    line-height: 23.5px;
  }
  @media screen and (min-width: 1440px) {
    height: 48px;
    font-size: 18px;
    line-height: 26.44px;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #dc2f2f;
  font-size: 10px;
  line-height: 14.69px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.error};
`;

export const Line = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 12px;
  line-height: 17.63px;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 24px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
  @media screen and (min-width: 744px) {
    font-size: 16px;
    line-height: 23.5px;
    margin-top: 18px;
    margin-bottom: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 26.44px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export const NetworkBtnSubmit = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
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
  @media screen and (min-width: 744px) {
    font-size: 16px;
    line-height: 23.5px;
  }
  @media screen and (min-width: 1440px) {
    height: 48px;
  }
`;

export const LinkText = styled.p`
  font-size: 14px;
  font-weight: 20.56px;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  gap: 4px;
  @media screen and (min-width: 744px) {
    font-size: 16px;
    line-height: 23.5px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 29.38px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 17.63px;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  margin-top: 16px;
  @media screen and (min-width: 744px) {
    margin-top: 4px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    font-weight: 20.56;
    margin-top: 16px;
  }
`;

export const Img = styled.img`
  width: 16px;
  height: 16px;
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
  @media screen and (min-width: 744px) {
    font-size: 16px;
    line-height: 23.5px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 29.38px;
  }
`;
