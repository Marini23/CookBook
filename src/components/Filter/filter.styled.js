import styled from 'styled-components';

export const FormFilter = styled.form`
  display: flex;
  gap: 160px;
  background-color: #ededed;
  padding: 64px 144px;
`;

export const WrapFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.h6`
  font-size: 16px;
  font-weight: 500;
  line-height: 23.5px;
`;

export const WrapItem = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 13px; */
`;

export const Span = styled.span`
  font-size: 14px;
  line-height: 20.56px;
  color: #3e3e3e;
`;

export const InputNumber = styled.input`
  cursor: pointer;
  width: 48px;
  height: 32px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2) inset;
  outline: none;
  border: none;
  background-color: #f8f8f8;
`;

export const ClearIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 8px;
`;

export const ClearButton = styled.button`
  cursor: pointer;
  width: 120px;
  /* padding: 8px 44px; */
  /* height: 18px; */
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20.56px;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
`;
