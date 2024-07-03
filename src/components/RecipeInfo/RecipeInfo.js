import { useLocation } from 'react-router-dom';
import {
  DetailsContainer,
  ImageWrapper,
  Img,
  InfoContainer,
  Item,
  Line,
  Link,
  ListIngredients,
  SaveBtn,
  SaveBtnContainer,
  SaveBtnText,
  StyledLinkGoBack,
  TextDetail,
  TextDiets,
  TextIngredients,
  Title,
  TitleIngredients,
} from './RecipeInfo.styled';
import { useRef } from 'react';
import arrowBack from '../../images/arrow_back.svg';
import plusIcon from '../../images/plus_icon.svg';
import timeIcon from '../../images/clock.svg';
import caloriesIcon from '../../images/calories.svg';
import servesIcon from '../../images/serves.svg';

export const RecipeInfo = ({ recipeInfo }) => {
  const location = useLocation();

  const goBackLink = useRef(location.state?.from ?? `/`);

  console.log(recipeInfo);

  const diets = recipeInfo.recipe.dietLabels
    .map(label => label.toUpperCase())
    .join(', ');

  const link = recipeInfo.recipe.url;
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
        <DetailsContainer>
          <Item>
            <img src={timeIcon} alt=" clock" />
            <TextDetail>
              {' '}
              {recipeInfo.recipe.totalTime > 0
                ? `${recipeInfo.recipe.totalTime} min`
                : '...'}
            </TextDetail>
          </Item>
          <Line></Line>
          <Item>
            <img src={caloriesIcon} alt=" plate" />
            <TextDetail>{Math.ceil(recipeInfo.recipe.calories)} Cal</TextDetail>
          </Item>
          <Line></Line>
          <Item>
            <img src={servesIcon} alt=" serves icon" />
            <TextDetail>
              {recipeInfo.recipe.yield > 0
                ? `Serves ${recipeInfo.recipe.yield}`
                : '...'}
            </TextDetail>
          </Item>
        </DetailsContainer>
        <TextDiets>{diets}</TextDiets>
        <TitleIngredients>
          {recipeInfo.recipe.ingredientLines.length} INGREDIENTS:
        </TitleIngredients>
        <ListIngredients>
          {recipeInfo.recipe.ingredientLines.map((ingredient, index) => (
            <TextIngredients key={index}>{ingredient}</TextIngredients>
          ))}
        </ListIngredients>
      </InfoContainer>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        Start Cooking
      </Link>
    </div>
  );
};
