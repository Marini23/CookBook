import { useLocation } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../images/arrowBackGrey.svg';
import recipePlaceholder from '../../images/mock_image_recipe.png';
import {
  BtnContainer,
  DetailsContainer,
  Img,
  ImgDetail,
  ImgList,
  InfoDetailsWrapper,
  InfoTitleContainer,
  InfoTitleWrapper,
  IngredientsContainer,
  Item,
  Line,
  Link,
  ListIngredients,
  SaveBtn,
  SaveBtnText,
  StyledLinkGoBack,
  TextDetail,
  TextDiets,
  TextIngredients,
  Title,
  TitleIngredients,
} from './InfoTabletDesktop.styled';
import timeIcon from '../../images/clock.svg';
import caloriesIcon from '../../images/calories.svg';
import servesIcon from '../../images/serves.svg';
import listIcon from '../../images//listIcon.svg';
import { BtnFavorite } from 'components/BtnFavorite/BtnFavorite';

export const InfoTabletDesktop = ({
  recipeInfo,
  goBackLink,
  isFavorite,
  toggleFavorite,
  handleIngredients,
  diets,
  link,
}) => {
  const location = useLocation();

  return (
    <>
      <StyledLinkGoBack to={goBackLink.current} state={{ from: location }}>
        <ArrowIcon />
        Back
      </StyledLinkGoBack>
      <InfoTitleContainer>
        <Img
          src={recipeInfo.recipe.images?.REGULAR?.url || recipePlaceholder}
          alt="recipe"
          onError={e => {
            e.currentTarget.src = recipePlaceholder;
          }}
        />
        <InfoTitleWrapper>
          <Title>{recipeInfo.recipe.label.toUpperCase()}</Title>
          <BtnContainer>
            <BtnFavorite
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
            />
          </BtnContainer>
          <TextDiets>{diets}</TextDiets>
        </InfoTitleWrapper>
      </InfoTitleContainer>
      <InfoDetailsWrapper>
        <DetailsContainer>
          <Item>
            <ImgDetail src={timeIcon} alt=" clock" />
            <TextDetail>
              {' '}
              {recipeInfo.recipe.totalTime > 0
                ? `${recipeInfo.recipe.totalTime} min`
                : '...'}
            </TextDetail>
          </Item>
          <Line></Line>
          <Item>
            <ImgDetail src={caloriesIcon} alt=" plate" />
            <TextDetail>{Math.ceil(recipeInfo.recipe.calories)} Cal</TextDetail>
          </Item>
          <Line></Line>
          <Item>
            <ImgDetail src={servesIcon} alt=" serves icon" />
            <TextDetail>
              {recipeInfo.recipe.yield > 0
                ? `Serves ${recipeInfo.recipe.yield}`
                : '...'}
            </TextDetail>
          </Item>
        </DetailsContainer>
        <IngredientsContainer>
          <TitleIngredients>
            {recipeInfo.recipe.ingredientLines.length} INGREDIENTS:
          </TitleIngredients>
          <ListIngredients>
            {recipeInfo.recipe.ingredientLines.map((ingredient, index) => (
              <TextIngredients key={index}>{ingredient}</TextIngredients>
            ))}
          </ListIngredients>
        </IngredientsContainer>
      </InfoDetailsWrapper>
      <SaveBtn type="button" onClick={() => handleIngredients(recipeInfo)}>
        <ImgList src={listIcon} alt=" list icon" />
        <SaveBtnText>Save Ingredients to Shopping List</SaveBtnText>
      </SaveBtn>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        Start Cooking
      </Link>
    </>
  );
};
