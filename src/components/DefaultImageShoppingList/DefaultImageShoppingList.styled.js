import styled from 'styled-components';

export const PictureContainer = styled.div`
  position: relative;
`;

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

export const Label = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 20.5px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 23.5px;
  }
`;
