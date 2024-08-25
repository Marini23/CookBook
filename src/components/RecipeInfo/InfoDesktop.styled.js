import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLinkGoBack = styled(NavLink)`
  /* position: absolute;
  top: 16px;
  left: 16px; */
  width: 32px;
  height: 32px;
  border-radius: 8px;
  /* background-color: rgba(255, 255, 255, 0.7); */
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
