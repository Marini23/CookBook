import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  margin: 0 auto;
  margin-bottom: 171px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 744px;
    padding: 0 40px;
    margin-top: 40px;
    margin-bottom: 171px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 72px;
    margin-top: 88px;
    margin-bottom: 295px;
  }
`;

export const WrapperInfo = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 434px;
  }
  @media screen and (min-width: 1440px) {
    width: 417px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: #3e3e3e;
  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const BagIcon = styled.img`
  margin: 0 auto;
  width: 135px;
  height: 219px;
  margin-top: 110px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 204px;
    height: 331px;
    margin-top: 120px;
  }
  @media screen and (min-width: 1440px) {
    width: 272px;
    height: 491px;
    margin-top: 143px;
  }
`;

export const Text = styled.p`
  height: 54px;
  font-size: 12px;
  line-height: 17.63px;
  margin: 0 auto;
  text-align: center;
  color: #b1b0b2;
  margin-top: 24px;
`;

export const PlusIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  margin-top: 14px;
  margin-bottom: 14px;
  @media screen and (min-width: 744px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const BtnLink = styled.button`
  cursor: pointer;
  width: 100%;
  max-width: 359px;
  height: 34px;
  border-radius: 4px;
  border: none;
  background-color: #ededed;
  color: #252525;
  font-size: 12px;
  font-weight: 400;
  line-height: 17.63px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 744px) {
    max-width: 435px;
    height: 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 417px;
    height: 40px;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  width: 100%;
  max-width: 359px;
  height: 34px;
  border-radius: 4px;
  border: none;
  background-color: #ededed;
  color: #252525;
  font-size: 12px;
  font-weight: 400;
  line-height: 17.63px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 744px) {
    max-width: 435px;
    height: 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 417px;
    height: 40px;
  }
`;
