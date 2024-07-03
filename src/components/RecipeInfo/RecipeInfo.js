import { useLocation } from 'react-router-dom';
import {
  ImageWrapper,
  Img,
  InfoContainer,
  SaveBtn,
  SaveBtnContainer,
  SaveBtnText,
  StyledLinkGoBack,
  Title,
} from './RecipeInfo.styled';
import { useRef } from 'react';
import arrowBack from '../../images/arrow_back.svg';
import plusIcon from '../../images/plus_icon.svg';

export const RecipeInfo = ({ recipeInfo }) => {
  const location = useLocation();

  const goBackLink = useRef(location.state?.from ?? `/`);

  console.log(recipeInfo);
  return (
    <div>
      <ImageWrapper>
        <Img src={recipeInfo.recipe.image} alt="recipe" />
        <StyledLinkGoBack to={goBackLink.current} state={{ from: location }}>
          <img src={arrowBack} alt="arrow back" />
        </StyledLinkGoBack>
      </ImageWrapper>
      <InfoContainer>
        <SaveBtnContainer>
          <SaveBtnText>Save Ingredients to Shopping List</SaveBtnText>
          <SaveBtn type="button">
            {' '}
            <img src={plusIcon} alt=" plus icon" />
          </SaveBtn>
        </SaveBtnContainer>
        <Title>{recipeInfo.recipe.label}</Title>
        <div>Time</div>
        <div>diets</div>
        <h4>{recipeInfo.recipe.ingredients.lenght} INGREDIENTS</h4>
        <ol></ol>
      </InfoContainer>
      <button type="button">Start Cooking</button>
    </div>
  );
};
