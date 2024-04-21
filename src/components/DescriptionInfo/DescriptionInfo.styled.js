import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Picture = styled.picture`
  font-size: 0;
`;

export const Text = styled.p`
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.colors.secondaryOrange};
  font-size: 12px;
  line-height: 20.56px;
  margin-bottom: 40px;
`;

export const SpanText = styled.span`
  font-size: 14px;
  line-height: 20.56px;
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 40px;
`;

export const InfoContainer = styled.div`
  padding: 8px 16px;
`;

export const TitleBlock = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.yellowText};
  margin-bottom: 10px;
`;

export const TextBlock = styled.p`
  font-size: 12px;
  line-height: 17.36px;
  color: ${({ theme }) => theme.colors.secondaryBlackText};
  margin-bottom: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 200px;
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
`;
