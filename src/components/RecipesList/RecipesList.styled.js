import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  margin: 0 auto;
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
  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 48px;
    margin-top: 88px;
  }
`;

export const TitleAfterSearch = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: #3e3e3e;
  margin-bottom: 24px;
  margin-top: 32px;
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
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 48px;
  }
`;
