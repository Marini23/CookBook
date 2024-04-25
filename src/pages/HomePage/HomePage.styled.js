import styled from 'styled-components';
import bg_mobile from '../../images/bg_home_mobile.jpg';
import bg_decktop from '../../images/bg_home_desktop.jpg';

export const Container = styled.section`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const MainInfo = styled.div`
  width: 100%;
  max-width: 390px;
  height: 354px;
  background-image: url(${bg_mobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  @media screen and (min-width: 1440px) {
    background-image: url(${bg_decktop});
    max-width: 1440px;
    height: 1024px;
  }
`;
