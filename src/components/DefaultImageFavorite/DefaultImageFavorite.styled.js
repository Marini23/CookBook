import styled from 'styled-components';

export const Picture = styled.picture`
  width: 100%;
  max-width: 366px;
  min-height: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 4px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 205px;
    min-height: 116px;
    height: 116px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 416px;
    min-height: 400px;
    height: 400px;
  }
`;
