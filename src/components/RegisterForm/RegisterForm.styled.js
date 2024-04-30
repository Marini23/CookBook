import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 20.56px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
`;
export const Button = styled.button`
  cursor: pointer;
  height: 40px;
  border-radius: 4px;
  border: none;
  /* margin-top: 32px; */
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.black};
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
`;

export const ErrorMessage = styled.div`
  color: #dc2f2f;
  font-size: 12px;
`;
