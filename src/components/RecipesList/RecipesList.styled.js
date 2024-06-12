import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  width: 100%;
  min-width: 320px;
  max-width: 390px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: 34px;
  color: #3e3e3e;
  margin-bottom: 24px;
  margin-top: 32px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
