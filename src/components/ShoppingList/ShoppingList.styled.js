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
