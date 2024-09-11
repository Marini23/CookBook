import styled from 'styled-components';

import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

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

export const Label = styled.p`
  width: 100%;
  max-width: 366px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
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
  right: 12px;
  width: 32px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    top: 0px;
    right: 12px;
    width: 32px;
    height: 49px;
  }
  @media screen and (min-width: 1440px) {
    top: 0px;
    right: 20px;
    width: 32px;
    height: 49px;
    background-color: #f4c443;
    border-radius: 0.3px;
  }
`;

export const StyledHeartIcon = styled(FaRegHeart)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryOrange};
  width: 16px;
  height: 16px;
  @media screen and (min-width: 744px) {
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 1440px) {
    width: 16px;
    height: 16px;
  }
`;

export const StyledHeartIconFavorite = styled(FaHeart)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryOrange};
  width: 16px;
  height: 16px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 1440px) {
    width: 16px;
    height: 16px;
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
