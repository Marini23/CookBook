import styled from 'styled-components';

import bg_mobile from '../../images/bg_footer_mobile.jpg';
import bg_mobile_2x from '../../images/bg_footer_mobile_2x.jpg';
import bg_mobile_3x from '../../images/bg_footer_mobile_3x.jpg';
import bg_tablet from '../../images/bg_footer_tablet.jpg';
import bg_tablet_2x from '../../images/bg_footer_tablet_2x.jpg';
import bg_tablet_3x from '../../images/bg_footer_tablet_3x.jpg';
import bg_desktop from '../../images/footer_home_desktop.jpg';
import bg_desktop_2x from '../../images/footer_home_desktop_2x.jpg';
import bg_desktop_3x from '../../images/footer_home_desktop_3x.jpg';

export const Container = styled.footer`
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  height: 79px;
  margin: 0 auto;
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
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  @media screen and (min-width: 744px) {
    max-width: 744px;
    height: 184px;
    background-image: linear-gradient(
        rgba(25, 25, 25, 0.5),
        rgba(25, 25, 25, 0.5)
      ),
      url(${bg_tablet});
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
    padding: 32px 0;
    gap: 0;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 360px;
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
    gap: 0;
    padding: 64px 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 744px) {
    flex-direction: row;
    gap: 4px;
  }
`;

export const Img = styled.img`
  width: 48px;
  height: 32px;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: optimize-contrast;
  @media screen and (min-width: 744px) {
    width: 56px;
    height: 37px;
  }
  @media screen and (min-width: 1440px) {
    width: 166px;
    height: 112px;
  }
`;

export const FooterText = styled.p`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 14.96px;
  color: ${({ theme }) => theme.colors.footerText};
  @media screen and (min-width: 744px) {
    font-size: 12px;
    font-weight: 17.63px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 23.5px;
    /* margin-top: 32px; */
  }
`;

export const Link = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 14.96px;
  color: ${({ theme }) => theme.colors.footerText};
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 744px) {
    font-size: 12px;
    font-weight: 17.63px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    font-weight: 20.56px;
  }
`;

export const List = styled.ul`
  display: none;
  @media screen and (min-width: 744px) {
    display: flex;
    margin-top: 15px;
    margin-bottom: 24px;
    gap: 32px;
    font-size: 18px;
    line-height: 26.44px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-top: 32px;
    margin-bottom: 32px;
    gap: 32px;
  }
`;

export const LinkItem = styled.a`
  /* text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 35.25px;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.primaryOrange};
  } */
  @media screen and (min-width: 744px) {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.whiteText};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 26.44px;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryOrange};
    }
    &:focus {
      color: ${({ theme }) => theme.colors.primaryOrange};
    }
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
  }
`;

export const Button = styled.button`
  @media screen and (min-width: 744px) {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.whiteText};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 26.44px;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryOrange};
    }
    &:focus {
      color: ${({ theme }) => theme.colors.primaryOrange};
    }
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
  }
`;
