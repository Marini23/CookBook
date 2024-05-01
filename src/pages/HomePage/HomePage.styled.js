import styled from 'styled-components';
import bg_mobile from '../../images/bg_home_mobile.jpg';
import bg_tablet from '../../images/bg_home-tablet.jpg';
import bg_decktop from '../../images/bg_home_desktop.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Container = styled.section`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
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
  @media screen and (min-width: 768px) {
    background-image: url(${bg_tablet});
    max-width: 768px;
    background-size: contain;
    height: 536px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bg_decktop});
    background-size: cover;
    max-width: 1440px;
    height: 1024px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 44px;
  left: 16px;
  @media screen and (min-width: 768px) {
    width: 92px;
    height: 60px;
    top: 16px;
    left: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 125px;
    height: 83px;
    top: 24px;
    left: 72px;
  }
`;

export const StyledHamburgerMenu = styled(GiHamburgerMenu)`
  position: absolute;
  top: 44px;
  right: 16px;
  color: ${({ theme }) => theme.colors.primaryOrange};
  width: 24px;
  height: 24px;
`;

export const WrapContent = styled.div`
  position: absolute;
  top: 134px;
  left: 16px;
  width: 309px;
  height: 126px;
  background-color: rgba(107, 107, 107, 0.5);
  padding: 16px;
  @media screen and (min-width: 768px) {
    width: 496px;
    height: 220px;
    top: 178px;
    left: 40px;
    padding: 32px 20px;
  }
  @media screen and (min-width: 1440px) {
    width: 942px;
    height: 399px;
    top: 259px;
    left: 72px;
    padding: 100px 80px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 32px;
  }
`;

export const SecondaryText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    line-height: 26.44px;
    margin-bottom: 32px;
  }
`;

// export const Link = styled.a`
//   text-decoration: none;
//   cursor: pointer;
//   max-width: 200px;
//   padding: 8px 44px;
//   height: 34px;
//   border: none;
//   background-color: ${({ theme }) => theme.colors.primaryOrange};
//   color: ${({ theme }) => theme.colors.primaryBlackText};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 12px;
//   line-height: 17.36px;
//   &:hover {
//     border-radius: 4px;
//     border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
//     background-color: transparent;
//     color: ${({ theme }) => theme.colors.primaryOrange};
//   }
//   &:focus {
//     border: none;
//     border-radius: 4px;
//     border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
//     background-color: transparent;
//     color: ${({ theme }) => theme.colors.primaryOrange};
//   }
//   @media screen and (min-width: 1440px) {
//     display: flex;
//     flex-wrap: nowrap;
//     width: 305px;
//     max-width: 305px;
//     height: 45px;
//     font-size: 20px;
//     line-height: 29.38px;
//     margin-bottom: 40px;
//   }
// `;

export const Link = styled.button`
  /* text-decoration: none; */
  cursor: pointer;
  max-width: 200px;
  padding: 8px 44px;
  height: 34px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.primaryBlackText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 17.36px;
  &:hover {
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    border: none;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: nowrap;
    width: 305px;
    max-width: 305px;
    height: 45px;
    font-size: 20px;
    line-height: 29.38px;
    margin-bottom: 40px;
  }
`;

export const NavMenu = styled.div`
  position: absolute;
  top: 16px;
  right: 40px;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 62px;
    right: 72px;
    display: flex;
    gap: 24px;
  }
`;
export const Button = styled.button`
  height: 45px;
  display: flex;
  border: none;
  background-color: transparent;
  padding: 8px 16px;
  justify-self: center;
  align-items: center;
  font-size: 20px;
  line-height: 29.38px;
  color: ${({ theme }) => theme.colors.whiteText};
  &:hover {
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:focus {
    border: none;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 1440px) {
    padding: 8px 24px;
  }
`;
