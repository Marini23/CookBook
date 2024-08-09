import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  margin: 0 auto;
  margin-bottom: 36px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 744px;
    padding: 0 40px;
    margin-bottom: 89px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 72px;
    margin-bottom: 88px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    margin-bottom: 32px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    margin-top: 88px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: #3e3e3e;
  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

export const TitleTwo = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: #252525;
  margin-top: 34px;
  margin-bottom: 12px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    line-height: 23.5px;
    margin-bottom: 24px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
    margin-bottom: 36px;
    margin-top: 64px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    gap: 24px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`;

export const AddBtn = styled.button`
  cursor: pointer;
  height: 32px;
  border-radius: 4px;
  border: none;
  background-color: #ededed;
  color: #a2a8bc;
  font-size: 12px;
  font-weight: 400;
  line-height: 17.63px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* &:hover {
    border: none;
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryOrange};
  } */
  @media screen and (min-width: 744px) {
    height: 40px;
    font-size: 14px;
    line-height: 20.56px;
  }
  @media screen and (min-width: 1440px) {
    height: 48px;
    font-size: 16px;
    line-height: 23.5px;
  }
`;

export const PlusIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 16px;
  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;
  }
`;
