import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { VscHeart } from 'react-icons/vsc';
import { VscHeartFilled } from 'react-icons/vsc';

export const ImageWrapper = styled.div`
  position: relative;
  font-size: 0;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 390px;
  height: 428px;
  object-fit: cover;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 784px;
  }
`;

export const StyledLinkGoBack = styled(NavLink)`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  /* &.active {
    color: #ff8c00;
  } */
  @media screen and (min-width: 1440px) {
    width: 56px;
    height: 56px;
    top: 56px;
    left: 72px;
  }
`;

export const StyledHeart = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  /* &.active {
    color: #ff8c00;
  } */
  @media screen and (min-width: 1440px) {
    width: 56px;
    height: 56px;
    top: 56px;
    right: 72px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 24px 16px;
  margin: 16px 16px 24px 16px;
  @media screen and (min-width: 1440px) {
    padding: 80px 110px;
    margin: 56px 72px 48px 72px;
  }
`;

export const SaveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 358px;
  height: 40px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primaryOrange};
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 12px;
  @media screen and (min-width: 1440px) {
    max-width: 1076px;
    height: 56px;
    margin-bottom: 40px;
  }
`;

export const SaveBtnText = styled.p`
  font-size: 12px;
  line-height: 17.63px;
  color: #252525;
  margin-left: 12px;
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 26.44px;
  }
`;

export const ImgList = styled.img`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 26.44px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 40px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 16px 8px 16px;
  gap: 16px;
  margin-bottom: 27px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    padding: 40px;
    gap: 40px;
  }
`;

export const Item = styled.div`
  width: 100%;
  max-width: 76.67px;
  height: 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 1440px) {
    max-width: 278.67px;
    height: 91px;
    gap: 16px;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 49px;
  background-color: #e1e2e3;
  @media screen and (min-width: 1440px) {
    height: 91px;
  }
`;

export const TextDetail = styled.p`
  font-size: 14px;
  line-height: 20.56px;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
  }
`;

export const ImgDetail = styled.img`
  width: 20px;
  height: 20px;
  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

export const TextDiets = styled.p`
  font-size: 14px;
  line-height: 20.56px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: underline;
  margin-bottom: 20px;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
    margin-bottom: 40px;
  }
`;

export const TitleIngredients = styled.h4`
  font-size: 14px;
  font-weight: 400;
  line-height: 20.56px;
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
`;

export const TextIngredients = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 17.56px;
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
  width: 100%;
  max-width: 358px;
  margin: 0 auto;
  height: 40px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 20.56px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  border-radius: 4px;
  margin-bottom: 46px;
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
    margin-bottom: 88px;
    font-size: 18px;
    font-weight: 26.44px;
    max-width: 520px;
    height: 48px;
  }
`;

export const StyledHeartIcon = styled(VscHeart)`
  cursor: pointer;
  color: #252525;
  width: 24px;
  height: 24px;
`;

export const StyledHeartIconFavorite = styled(VscHeartFilled)`
  cursor: pointer;
  color: #252525;
  width: 24px;
  height: 24px;
`;
