import styled from 'styled-components';
import bg_mobile from '../../images/bg_header_mobile.jpg';
import bg_mobile_2x from '../../images/bg_header_mobile_2x.jpg';
import bg_mobile_3x from '../../images/bg_header_mobile_3x.jpg';
import bg_tablet from '../../images/bg_header_tablet.jpg';
import bg_tablet_2x from '../../images/bg_header_tablet_2x.jpg';
import bg_tablet_3x from '../../images/bg_header_tablet_3x.jpg';
import bg_desktop from '../../images/bg_header_desktop.jpg';
import bg_desktop_2x from '../../images/bg_header_desktop_2x.jpg';
import bg_desktop_3x from '../../images/bg_header_desktop_3x.jpg';

export const Header = styled.header`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  z-index: 1000;
  @media screen and (min-width: 744px) {
    max-width: 744px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: end;
  flex-direction: row;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  height: 80px;
  background-image: linear-gradient(
      rgba(25, 25, 25, 0.5),
      rgba(25, 25, 25, 0.5)
    ),
    url(${bg_mobile});
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: linear-gradient(
        rgba(25, 25, 25, 0.5),
        rgba(25, 25, 25, 0.5)
      ),
      url(${bg_mobile_2x});
  }

  @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
    background-image: linear-gradient(
        rgba(25, 25, 25, 0.5),
        rgba(25, 25, 25, 0.5)
      ),
      url(${bg_mobile_3x});
  }
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 30px 16px 16px 16px;
  align-items: end; /* Center items vertically */
  justify-content: space-between; /* Space between items */
  @media screen and (min-width: 744px) {
    max-width: 744px;
    background-image: linear-gradient(
        rgba(25, 25, 25, 0.5),
        rgba(25, 25, 25, 0.5)
      ),
      url(${bg_tablet});
    padding: 12px 40px;
    height: 61px;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: linear-gradient(
          rgba(25, 25, 25, 0.5),
          rgba(25, 25, 25, 0.5)
        ),
        url(${bg_tablet_2x});
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
      background-image: linear-gradient(
          rgba(25, 25, 25, 0.5),
          rgba(25, 25, 25, 0.5)
        ),
        url(${bg_tablet_3x});
    }
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 159px;
    padding: 48px 72px 48px 72px;
    background-image: linear-gradient(
        rgba(25, 25, 25, 0.5),
        rgba(25, 25, 25, 0.5)
      ),
      url(${bg_desktop});
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: linear-gradient(
          rgba(25, 25, 25, 0.5),
          rgba(25, 25, 25, 0.5)
        ),
        url(${bg_desktop_2x});
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
      background-image: linear-gradient(
          rgba(25, 25, 25, 0.5),
          rgba(25, 25, 25, 0.5)
        ),
        url(${bg_desktop_3x});
    }
  }
`;

export const Logo = styled.img`
  width: 51px;
  height: 34px;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: optimize-contrast;
  @media screen and (min-width: 744px) {
    width: 56px;
    height: 37px;
    top: 16px;
    left: 40px;
    margin-right: 113px;
  }
  @media screen and (min-width: 1440px) {
    /* position: absolute; */
    width: 93px;
    height: 63px;
    margin-right: 312px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 16px;
  margin-left: auto;
  @media screen and (min-width: 744px) {
    margin-right: 36px;
    height: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 8px;
    margin-right: 72px;
    height: 40px;
  }
`;

export const Name = styled.p`
  font-size: 12px;
  line-height: 17.63px;
  color: ${({ theme }) => theme.colors.whiteText};

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
  }
`;

export const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border-radius: 40px;
  margin-right: 16px;
  @media screen and (min-width: 744px) {
    /* width: 40px;
    height: 40px; */
    margin-right: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
    margin-right: 0;
  }
`;
