import styled from 'styled-components';

export const Picture = styled.picture`
  width: 100%;
  max-width: 111px;
  min-height: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 4px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 205px;
    min-height: 116px;
    height: 116px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 306px;
    min-height: 169px;
    height: 169px;
  }
`;
