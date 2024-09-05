import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { VscHeart } from 'react-icons/vsc';
import { VscHeartFilled } from 'react-icons/vsc';

export const StyledLinkGoBack = styled(NavLink)`
  display: flex;
  justify-content: start;
  align-items: center;
  color: #b1b0b2;
  font-size: 16px;
  line-height: 23.5px;
  text-decoration: none;
  /* &.active {
    color: #ff8c00;
  } */
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 26.44px;
  }
`;

export const InfoTitleContainer = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 16px;
  @media screen and (min-width: 1440px) {
    gap: 24px;
    margin-top: 32px;
  }
`;

export const Img = styled.img`
  width: 280px;
  height: 184px;
  object-fit: cover;
  border-radius: 4px;
  @media screen and (min-width: 1440px) {
    width: 526px;
    height: 346px;
  }
`;

export const InfoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  width: 364px;
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.black};
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit the text to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 1440px) {
    width: 746px;
    font-size: 64px;
    line-height: 64px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 16px;
  @media screen and (min-width: 1440px) {
    gap: 24px;
    margin-top: 28px;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  width: 90px;
  height: 36px;
  border-radius: 4px;
  border: none;
  background-color: #ededed;
  font-size: 14px;
  line-height: 20.56px;
  color: #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    width: 121px;
    height: 40px;
    font-size: 16px;
    line-height: 23.5px;
  }
`;

export const StyledHeartIcon = styled(VscHeart)`
  color: ${({ theme }) => theme.colors.primaryOrange};
  width: 20px;
  height: 20px;
  margin-right: 8px;
  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;

export const StyledHeartIconFavorite = styled(VscHeartFilled)`
  color: ${({ theme }) => theme.colors.primaryOrange};
  width: 20px;
  height: 20px;
  margin-right: 8px;
  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;
export const ShareIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;

export const TextDiets = styled.p`
  font-size: 16px;
  line-height: 23.5px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: underline;
  margin-top: 16px;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
    margin-top: 28px;
  }
`;

export const InfoDetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: inset 0 -1px 0 0 rgba(144, 144, 144, 0.25);
  padding: 42px 16px 70px 16px;
  margin-bottom: 32px;
  @media screen and (min-width: 1440px) {
    box-shadow: inset 0 -1px 0 0 rgba(144, 144, 144, 0.25);
    padding: 80px 110px;
    margin-top: 40px;
    margin-bottom: 57px;
  }
`;

export const DetailsContainer = styled.div`
  width: 622px;
  height: 122px;
  margin: 0 auto;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 21px;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    width: 1076px;
    height: 171px;
    margin-bottom: 40px;
    padding: 40px;
    gap: 40px;
  }
`;

export const Item = styled.div`
  width: 172px;
  height: 77px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1440px) {
    width: 278.67px;
    height: 91px;
    gap: 0;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 40px;
  background-color: #e1e2e3;
  margin-top: 20px;
  @media screen and (min-width: 1440px) {
    height: 91px;
    margin-top: 0;
  }
`;

export const TextDetail = styled.p`
  font-size: 20px;
  line-height: 29.38px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 16px;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
  }
`;

export const ImgDetail = styled.img`
  width: 32px;
  height: 32px;
  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
`;

export const TitleIngredients = styled.h4`
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
  }
`;

export const ListIngredients = styled.ul`
  list-style-type: disc;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;
`;

export const TextIngredients = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 20.56px;
  color: ${({ theme }) => theme.colors.black};
  &::marker {
    font-size: 8px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 23.5px;
  }
`;

export const Link = styled.a`
  width: 434px;
  margin: 0 auto;
  height: 40px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 23.5px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  border-radius: 4px;
  margin-bottom: 48px;
  &:link,
  &:visited {
    color: inherit;
  }
  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }
  &:active {
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryOrange};
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 29.384px;
    width: 520px;
    height: 48px;
  }
`;

export const SaveBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 434px;
  height: 40px;
  background-color: transparent;
  border: 1.5px solid ${({ theme }) => theme.colors.primaryOrange};
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 16px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
    border: none;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
    border: none;
  }

  @media screen and (min-width: 1440px) {
    width: 520px;
    height: 48px;
    margin-bottom: 24px;
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
  }
`;

export const SaveBtnText = styled.p`
  font-size: 16px;
  line-height: 23.5px;
  color: #252525;
  margin-left: 12px;
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 29.38px;
  }
`;

export const ImgList = styled.img`
  width: 24px;
  height: 24px;
`;
