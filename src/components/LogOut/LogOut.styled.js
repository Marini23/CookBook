import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  line-height: 36px;
`;
