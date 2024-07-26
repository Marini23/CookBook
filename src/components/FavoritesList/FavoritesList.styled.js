import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  margin: 0 auto;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 744px;
    padding: 0 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 72px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: #3e3e3e;
  margin-bottom: 24px;
  margin-top: 32px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    margin-bottom: 32px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 48px;
    margin-top: 88px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 36px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 48px;
    margin-bottom: 88px;
  }
`;

export const ItemAddRecipe = styled.li`
  width: 366px;
  height: 261px;
  border-radius: 4px;
  margin: 0 auto;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  padding-top: 87px;
  padding-bottom: 34px;
  color: ${({ theme }) => theme.colors.grey};
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 205px;
    height: 144px;
    font-size: 14px;
    line-height: 20.56px;
    padding-top: 46px;
    padding-bottom: 13px;
  }
  @media screen and (min-width: 1440px) {
    width: 416px;
    height: 444px;
    padding-top: 140px;
    padding-bottom: 131px;
  }
`;

export const IconPlus = styled.img`
  width: 88px;
  height: 88px;
  margin-bottom: 16px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 56px;
    height: 56px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
    width: 120px;
    height: 120px;
    margin-bottom: 16px;
  }
`;

export const LinkItem = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
