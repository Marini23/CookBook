import styled from 'styled-components';

export const FormFilter = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  padding: 32px 40px;

  @media screen and (min-width: 1440px) {
    gap: 32px;
    padding: 64px 144px 46px 144px;
  }
`;

export const FilterColums = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  row-gap: 24px;
  @media screen and (min-width: 1440px) {
    row-gap: 8px;
  }
`;

export const WrapFilter = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 16px; */
`;

export const LabelFirst = styled.h6`
  font-size: 16px;
  font-weight: 500;
  line-height: 23.5px;
  margin-bottom: 12px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 8px;
  }
`;

export const Label = styled.h6`
  font-size: 16px;
  font-weight: 500;
  line-height: 23.5px;
  margin-bottom: 12px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const WrapItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  @media screen and (min-width: 1440px) {
  }
`;

export const Span = styled.span`
  font-size: 14px;
  line-height: 20.56px;
  color: #3e3e3e;
`;

export const InputNumber = styled.input`
  cursor: pointer;
  width: 40px;
  height: 32px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2) inset;
  outline: none;
  border: none;
  background-color: #f8f8f8;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const ClearIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 8px;
`;

export const ClearButton = styled.button`
  cursor: pointer;
  width: 130px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.56px;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 16px; */
`;

export const WrapCheckboxDiet = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 32px;
  row-gap: 16px;
  @media screen and (min-width: 1440px) {
    column-gap: 80px;
  }
`;

export const WrapCheckbox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;
  row-gap: 16px;
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 80px;
    row-gap: 16px;
  }
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

export const SubmitButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 124px;
  height: 40px;
  margin-top: 32px;
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
  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;
