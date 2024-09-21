import styled from 'styled-components';
import bg_mobile from '../../images/bg_home_mobile.jpg';
import bg_mobile_2x from '../../images/bg_home_mobile_2x.jpg';
import bg_mobile_3x from '../../images/bg_home_mobile_3x.jpg';
import bg_tablet from '../../images/bg_home_tablet.jpg';
import bg_tablet_2x from '../../images/bg_home_tablet_2x.jpg';
import bg_tablet_3x from '../../images/bg_home_tablet_3x.jpg';
import bg_decktop from '../../images/bg_home_desktop.jpg';
import bg_decktop_2x from '../../images/bg_home_desktop_2x.jpg';
import bg_decktop_3x from '../../images/bg_home_desktop_3x.jpg';

export const Container = styled.main`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 744px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const MainInfo = styled.section`
  width: 100%;
  max-width: 390px;
  height: 346px;
  background-image: url(${bg_mobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${bg_mobile_2x});
  }

  @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
    background-image: url(${bg_mobile_3x});
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    background-image: url(${bg_tablet});
    max-width: 744px;
    height: 535px;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bg_tablet_2x});
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
      background-image: url(${bg_tablet_3x});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bg_decktop});
    background-size: cover;
    max-width: 1440px;
    height: 1024px;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bg_decktop_2x});
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
      background-image: url(${bg_decktop_3x});
    }
  }
`;

export const Logo = styled.img`
  position: absolute;
  width: 51px;
  height: 34px;
  top: 30px;
  left: 16px;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: optimize-contrast;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 56px;
    height: 37px;
    top: 30px;
    left: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 96px;
    height: 63px;
    top: 24px;
    left: 72px;
  }
`;

export const WrapContent = styled.div`
  position: absolute;
  top: 128px;
  left: 16px;
  min-width: 260px;
  max-width: 358px;
  height: 126px;
  background-color: rgba(107, 107, 107, 0.5);
  padding: 16px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 664px;
    height: 300px;
    top: 155px;
    left: 40px;
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 942px;
    height: 399px;
    top: 259px;
    left: 72px;
    padding: 101px 86px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 16px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 35px;
    line-height: 36px;
    margin-bottom: 24px;
  }
`;

export const SecondaryText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    height: 60px;
    font-size: 18px;
    line-height: 26.44px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1440px) {
    width: 758px;
    font-size: 18px;
    line-height: 26.44px;
    margin-bottom: 32px;
  }
`;

export const ButtonLink = styled.button`
  cursor: pointer;
  width: 200px;
  padding: 8px 44px;
  height: 34px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.primaryBlackText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 17.36px;
  &:hover {
    border: none;
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
    /* color: ${({ theme }) => theme.colors.primaryOrange}; */
  }
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 305px;
    height: 40px;
    font-size: 16px;
    line-height: 23.5px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: nowrap;
    width: 305px;
    height: 45px;
    font-size: 20px;
    line-height: 29.38px;
  }
`;

export const NavMenu = styled.div`
  position: absolute;
  top: 16px;
  right: 40px;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    position: absolute;
    top: 35px;
    right: 40px;
    display: flex;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 42px;
    right: 80px;
    display: flex;
    gap: 24px;
  }
`;
export const RegisterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryOrange};
  &:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    color: ${({ theme }) => theme.colors.whiteText};
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    height: 32px;
    border: 1.5px solid ${({ theme }) => theme.colors.primaryOrange};
    padding: 4px 8px;
    font-size: 16px;
    line-height: 23.5px;
    &:hover {
      border: 1.5px solid ${({ theme }) => theme.colors.primaryOrange};
    }
    &:active {
      border: 1.5px solid ${({ theme }) => theme.colors.primaryOrange};
    }
  }

  @media screen and (min-width: 1440px) {
    height: 45px;
    padding: 8px 24px;
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    font-size: 20px;
    line-height: 29.38px;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    }
    &:active {
      border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    }
  }
`;

export const LoginButton = styled.button`
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.whiteText};
  &:hover {
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:active {
    border-radius: 4px;
    border: 1.5px solid transparent;
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    color: ${({ theme }) => theme.colors.whiteText};
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    height: 32px;
    border: 1.5px solid transparent;
    padding: 4px 8px;
    font-size: 16px;
    line-height: 23.5px;
    &:hover {
      border: 1.5px solid ${({ theme }) => theme.colors.primaryOrange};
    }
    &:active {
      border: 1.5px solid transparent;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 45px;
    border: 2px solid transparent;
    padding: 8px 24px;
    font-size: 20px;
    line-height: 29.38px;

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    }
    &:active {
      border: 2px solid transparent;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  position: relative;

  ${RegisterButton}:hover ~ ${LoginButton} {
    border: 2px solid transparent;
    color: ${({ theme }) => theme.colors.whiteText};
  }

  ${LoginButton}:hover ~ ${RegisterButton} {
    border: 2px solid transparent;
    color: ${({ theme }) => theme.colors.whiteText};
  }
`;
