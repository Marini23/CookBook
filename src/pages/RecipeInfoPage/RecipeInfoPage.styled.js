import styled from 'styled-components';
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 128px;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  margin: 0 auto;
  background-color: #f0f0f1;
  @media screen and (min-width: 744px) {
    max-width: 744px;
    padding: 77px 40px 40px 40px;
    background-color: #f8f8f8;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-top: 159px;
  }
`;
