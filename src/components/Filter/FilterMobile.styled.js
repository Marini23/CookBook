import styled from 'styled-components';

export const FormFilter = styled.form`
  position: relative;
  top: -48px;
  height: 100vh; /* Full viewport height */
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  overflow: hidden; /* Prevent overflow on this element */
`;

export const FormWrapper = styled.div`
  background-color: #d9d9d9;
  padding: 4px 4px 44px 36px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  /* height: 200px; */
  max-height: calc(100% - 80px);
  /* flex-grow: 1;  */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
  /* &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: 40px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track-piece:start {
    margin-top: 40px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dbd8e3;
    opacity: 0.6;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  } */
`;

export const CloseIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 7px;
  justify-content: end;
  align-items: center;
`;

export const CloseText = styled.p`
  font-size: 20px;
  line-height: 29.38px;
  color: #ffffff;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 64px;
  row-gap: 16px;
  padding-right: 32px;
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
  padding-right: 32px;
`;

export const WrapCheckbox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 64px;
  row-gap: 16px;
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
  height: 18px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 17.36px;
  /* &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  } */
  &:active {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 32px;
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
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
`;
