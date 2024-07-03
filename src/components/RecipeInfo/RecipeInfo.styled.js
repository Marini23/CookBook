import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 390px;
  height: 428px;
  object-fit: cover;
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
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 21px 16px 57px 16px;
  margin: 16px 15px 24px 17px;
`;

export const SaveBtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 326px;
  height: 32px;
  background-color: rgba(217, 217, 217, 0.35);
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const SaveBtnText = styled.p`
  font-size: 12px;
  line-height: 17.63px;
  color: ${({ theme }) => theme.colors.grey};
  margin-left: 16px;
`;

export const SaveBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  margin-right: 8px;
  margin-left: auto;
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
`;

export const DetailsContainer = styled.div`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 16px 8px 16px;
  gap: 16px;
  margin-bottom: 27px;
`;

export const Item = styled.div`
  width: 100%;
  max-width: 76.67px;
  height: 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Line = styled.div`
  width: 1px;
  height: 49px;
  background-color: #e1e2e3;
`;

export const TextDetail = styled.p`
  font-size: 14px;
  line-height: 20.56px;
  color: ${({ theme }) => theme.colors.black};
`;

export const TextDiets = styled.p`
  font-size: 14px;
  line-height: 20.56px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: underline;
  margin-bottom: 20px;
`;

export const TitleIngredients = styled.h4`
  font-size: 14px;
  font-weight: 400;
  line-height: 20.56px;
  color: ${({ theme }) => theme.colors.black};
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
  margin-bottom: 36px;
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

  @media screen and (min-width: 744px) {
  }
`;
