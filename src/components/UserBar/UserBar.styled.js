import styled from 'styled-components';
import bg from '../../images/bg_header.jpg';

export const Header = styled.header`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  /* display: flex;
  align-items: end;
  flex-direction: column;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  height: 80px;
  background-image: linear-gradient(
      rgba(25, 25, 25, 0.5),
      rgba(25, 25, 25, 0.5)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 30px 16px 16px 16px;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 159px;
    padding: 48px 72px;
    gap: 40px;
  } */
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: end;
  flex-direction: row;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  height: 80px;
  background-image: linear-gradient(
      rgba(25, 25, 25, 0.5),
      rgba(25, 25, 25, 0.5)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 30px 16px 16px 16px;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 159px;
    padding: 48px 72px;
    gap: 40px;
  }
`;

export const Logo = styled.img`
  /* position: absolute;
  top: 30px;
  left: 16px; */
  width: 51px;
  height: 34px;
  @media screen and (min-width: 768px) {
    width: 92px;
    height: 60px;
    top: 16px;
    left: 40px;
  }
  @media screen and (min-width: 1440px) {
    /* position: absolute; */
    width: 93px;
    height: 63px;
    margin-right: 312px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 16px;
  margin-left: auto;
  @media screen and (min-width: 1440px) {
    gap: 15px;
  }
`;

export const Name = styled.p`
  font-size: 12px;
  line-height: 17.63px;
  color: ${({ theme }) => theme.colors.whiteText};

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 35.25px;
  }
`;

// export const AvatarIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 24px;
//   height: 24px;
//   background-color: #ffffff;
//   border-radius: 40px;
//   @media screen and (min-width: 1440px) {
//     width: 40px;
//     height: 40px;
//   }
// `;

export const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border-radius: 40px;
  margin-right: 16px;
`;
