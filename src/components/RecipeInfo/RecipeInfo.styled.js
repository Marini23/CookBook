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
