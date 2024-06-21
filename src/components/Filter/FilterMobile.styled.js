import styled from 'styled-components';

export const FormFilter = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Container = styled.div`
  /* display: flex;
  align-items: start;
  column-gap: 72px; */
  /* justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 72px; /* Set the gap between columns */
  row-gap: 16px; /* Set the gap between rows */
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

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WrapCheckbox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 72px; /* Set the gap between columns */
  row-gap: 16px; /* Set the gap between rows */
`;

export const LabelCheckbox = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 20.56px;
  color: #3e3e3e;
`;

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2) inset;
  outline: none;
  border: none;
  background-color: #f8f8f8;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  position: relative;

  &:checked {
    background-color: #f4c343;
  }

  &:checked::after {
    content: '';
    position: absolute;
    left: 8px;
    top: 4px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
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
  height: 18px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 17.36px;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 124px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: #3e3e3e;
  font-size: 20px;
  font-weight: 400;
  line-height: 29.38px;
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
