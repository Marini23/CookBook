import styled from 'styled-components';
import { VscHeart } from 'react-icons/vsc';
import { VscHeartFilled } from 'react-icons/vsc';

export const Btn = styled.button`
  cursor: pointer;
  width: 80px;
  height: 32px;
  border-radius: 4px;
  border: none;
  background-color: #ededed;
  font-size: 12px;
  line-height: 17.63px;
  color: #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  @media screen and (min-width: 744px) {
    width: 96px;
    height: 36px;
    font-size: 14px;
    line-height: 20.56px;
    &:hover {
      background-color: #d9d9d9;
    }
    &:active {
      background-color: #ededed;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 132px;
    height: 40px;
    font-size: 16px;
    line-height: 23.5px;
  }
`;

export const TextBtn = styled.p`
  width: 60px;
  display: flex;
  justify-content: start;
`;

export const StyledHeartIcon = styled(VscHeart)`
  color: ${({ theme }) => theme.colors.primaryOrange};
  width: 18px;
  height: 18px;
  margin-right: 4px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 744px) {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;

export const StyledHeartIconFavorite = styled(VscHeartFilled)`
  color: ${({ theme }) => theme.colors.primaryOrange};
  width: 18px;
  height: 18px;
  margin-right: 4px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 744px) {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;
