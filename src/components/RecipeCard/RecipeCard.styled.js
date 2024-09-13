import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Heart } from '../../images/flagHeart.svg';
import { ReactComponent as HeartFavorite } from '../../images/flagHeartFavorite.svg';

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    min-width: 205px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 416px;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 366px;
  height: 220px;
  object-fit: cover;
  border-radius: 4px;
  font-size: 0;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 205px;
    height: 116px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 416px;
    height: 235px;
  }
`;

export const Label = styled.p`
  width: 100%;
  max-width: 366px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c9c9c9;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20.56px;
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
  padding: 0 8px;
  text-decoration: none;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    max-width: 205px;
    height: 24px;
    font-size: 12px;
    font-weight: 500;
    line-height: 17.63px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 416px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 23.5px;
  }
`;

export const HeartIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 24px;
  width: 28px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    top: 0px;
    right: 24px;
    width: 20px;
    height: 32px;
  }
  @media screen and (min-width: 1440px) {
    top: 0px;
    right: 24px;
    width: 28px;
    height: 43px;
  }
`;

export const StyledLinkList = styled(NavLink)`
  cursor: pointer;
  color: black;
  text-decoration: none;
  &.active {
    color: #ff8c00;
  }
`;

export const HeartImage = styled(Heart)`
  width: 28px;
  height: 44px;
  color: ${({ theme }) => theme.colors.primaryOrange};
  &:hover {
    color: ${({ theme }) => theme.colors.secondaryOrange};
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 744px) {
    width: 20px;
    height: 33px;
  }
  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 44px;
  }
`;
export const HeartImageFavorite = styled(HeartFavorite)`
  width: 28px;
  height: 44px;
  color: #fdfdfd;
  &:hover {
    color: #ededed;
  }
  &:active {
    color: #fdfdfd;
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 20px;
    height: 33px;
  }
  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 44px;
  }
`;
