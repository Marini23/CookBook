import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* background-color: ${({ theme }) => theme.colors.bgGrey}; */
  @media screen and (min-width: 1440px) {
  }
`;

export const Picture = styled.picture`
  font-size: 0;
`;

export const SpanText = styled.span`
  font-size: 12px;
  line-height: 20.56px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 29.38px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 40px;
  }
`;

export const Text = styled.p`
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.colors.secondaryOrange};
  font-size: 12px;
  line-height: 20.56px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 56px 40px;
    line-height: 29.38px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    padding: 72px;
    line-height: 29.38px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
  }
`;

export const InfoContainer = styled.div`
  padding: 8px 16px;
  background-color: rgba(217, 217, 217, 0.15);
`;

export const TitleBlock = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.yellowText};
  margin-bottom: 8px;
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
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    color: ${({ theme }) => theme.colors.primaryBlackText};
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: nowrap;
    width: 305px;
    max-width: 305px;
    height: 45px;
    font-size: 20px;
    line-height: 29.38px;
    margin-bottom: 40px;
  }
`;
