import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
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
  margin-bottom: 12px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    margin-bottom: 32px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    margin-bottom: 40px;
    margin-top: 88px;
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
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;
