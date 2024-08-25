import { useLocation } from 'react-router-dom';
import arrowBack from '../../images/arrow_back.svg';
import { StyledLinkGoBack } from './RecipeInfo.styled';
import { useRef } from 'react';

export const InfoDesktop = ({ recipeInfo }) => {
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? `/`);
  return (
    <div>
      <StyledLinkGoBack to={goBackLink.current} state={{ from: location }}>
        <img src={arrowBack} alt="arrow back" />
        Back
      </StyledLinkGoBack>
      <div>
        {/* <img /> */}
        <div>InfoTitle</div>
      </div>
      <div>infodescription</div>
    </div>
  );
};
