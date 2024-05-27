import styled from 'styled-components';
import bg from '../../images/bg_header.jpg';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(
      rgba(25, 25, 25, 0.5),
      rgba(25, 25, 25, 0.5)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Logo = styled.img`
  position: absolute;
  width: 51px;
  height: 34px;
  top: 37px;
  left: 16px;
  @media screen and (min-width: 768px) {
    width: 92px;
    height: 60px;
    top: 16px;
    left: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 93px;
    height: 63px;
    top: 24px;
    left: 72px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 37px;
  left: 100px;
`;

export const Name = styled.p`
  font-size: 12px;
  line-height: 17.63px;
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const AvatarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  /* background-color: ${props => `${props.theme.colors.primary}`};
  border-radius: 10px; */
`;
