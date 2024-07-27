import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
  }
`;

export const Picture = styled.picture`
  font-size: 0;
  width: 150px;
  height: 195px;

  @media screen and (min-width: 744px) {
    width: 245px;
    height: 283px;
  }

  @media screen and (min-width: 1440px) {
    width: 598px;
    height: 552px;
  }
`;

export const Text = styled.p`
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.colors.secondaryOrange};
  font-size: 12px;
  line-height: 20.56px;
  @media screen and (min-width: 744px) {
    font-size: 16px;
    line-height: 23.5px;
    padding: 32px 39px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    padding: 72px;
    line-height: 40px;
  }
`;

export const SpanText = styled.span`
  font-size: 12px;
  line-height: 20.56px;
  @media screen and (min-width: 744px) {
    font-size: 16px;
    line-height: 23.5px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 40px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 40px;
  @media screen and (min-width: 744px) {
    gap: 24px;
    margin-top: 48px;
    margin-bottom: 88px;
  }
`;

export const InfoContainer = styled.div`
  height: 195px;
  padding: 16px 16px 46px 16px;
  background-color: rgba(217, 217, 217, 0.15);
  @media screen and (min-width: 744px) {
    height: 283px;
    padding: 32px 40px;
  }
  @media screen and (min-width: 1440px) {
    height: 552px;
    padding: 120px 72px 120px 40px;
    /* background-color: #ececec; */
  }
`;

export const TitleBlock = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.yellowText};
  margin-bottom: 8px;
  @media screen and (min-width: 744px) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 24px;
  }
`;

export const TextBlock = styled.p`
  font-size: 12px;
  line-height: 17.63px;
  color: ${({ theme }) => theme.colors.secondaryBlackText};
  margin-bottom: 12px;
  @media screen and (min-width: 744px) {
    font-size: 14px;
    line-height: 20.56px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 29.38px;
    margin-bottom: 40px;
  }
`;

export const Link = styled.button`
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  padding: 8px 44px;
  height: 34px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 17.36px;
  color: ${({ theme }) => theme.colors.primaryOrange};
  &:hover {
    border: none;
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    color: ${({ theme }) => theme.colors.primaryBlackText};
  }
  &:active {
    border: none;
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
    color: ${({ theme }) => theme.colors.primaryBlackText};
  }
  @media screen and (min-width: 744px) {
    display: flex;
    flex-wrap: nowrap;
    max-width: 305px;
    height: 40px;
    font-size: 16px;
    line-height: 23.5px;
    /* margin-bottom: 40px; */
  }
  @media screen and (min-width: 1440px) {
    height: 45px;
    font-size: 20px;
    line-height: 29.38px;
    margin-bottom: 40px;
  }
`;

export const MobileLink = styled.button`
  cursor: pointer;
  margin: 0 auto;
  width: 100%;
  max-width: 358px;
  margin-top: 24px;
  margin-bottom: 32px;
  height: 37px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.primaryBlackText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20.56px;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:active {
    border: none;
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
`;
