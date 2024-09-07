import styled from 'styled-components';

export const ContainerNewIngredient = styled.div`
  cursor: pointer;
  width: 100%;
  height: 40px;
  padding: 12px 8px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(217, 217, 217, 0.35);
  margin-bottom: 16px;
  &:hover {
    border: 0.5px solid ${({ theme }) => theme.colors.grey};
  }
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    height: 40px;
    padding: 8px 16px;
  }
  @media screen and (min-width: 1440px) {
    height: 48px;
    padding: 8px 29px;
  }
`;

export const InputNewIngredient = styled.input`
  width: 100%;
  max-width: 290px;
  border: none;
  background-color: transparent;
  font-size: 12px;
  line-height: 17.63px;
  margin-right: 12px;
  &:hover,
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 570px;
    font-size: 14px;
    line-height: 20.56px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1170px;
    font-size: 16px;
    line-height: 23.5px;
    margin-right: 18px;
  }
`;

export const BtnNewIngredient = styled.button`
  width: 40px;
  border: none;
  background-color: transparent;
  font-size: 12px;
  line-height: 17.63px;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:active {
    color: ${({ theme }) => theme.colors.secondaryOrange};
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    font-size: 14px;
    line-height: 20.56px;
    width: 50px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 23.5px;
    width: 50px;
  }
`;
