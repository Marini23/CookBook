import styled from 'styled-components';
// import { FaHeart } from 'react-icons/fa';
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
  gap: 4px;
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
  @media screen and (min-width: 1440px) {
    max-width: 416px;
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
  text-align: center;
  background-color: #ededed;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20.56px;
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  @media screen and (min-width: 1440px) {
    max-width: 416px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 23.5px;
  }
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const StyledHeartIcon = styled(FaRegHeart)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryOrange};
  width: 20px;
  height: 20px;
`;

export const StyledHeartIconFavorite = styled(FaHeart)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryOrange};
  width: 20px;
  height: 20px;
`;

export const StyledLinkList = styled(NavLink)`
  cursor: pointer;
  color: black;

  &.active {
    color: #ff8c00;
  }
`;
