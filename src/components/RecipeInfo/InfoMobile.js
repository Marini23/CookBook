import {
  DetailsContainer,
  ImageWrapper,
  Img,
  ImgDetail,
  ImgList,
  InfoContainer,
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
} from './InfoMobile.styled';
import recipePlaceholder from '../../images/mock_image_recipe.png';
import arrowBack from '../../images/arrow_back.svg';
import listIcon from '../../images//listIcon.svg';
import timeIcon from '../../images/clock.svg';
import caloriesIcon from '../../images/calories.svg';
import servesIcon from '../../images/serves.svg';
import { useLocation } from 'react-router-dom';
import { BtnFavorite } from 'components/BtnFavorite/BtnFavorite';

export const InfoMobile = ({
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
      <ImageWrapper>
        <Img
          src={recipeInfo.recipe.images?.REGULAR?.url || recipePlaceholder}
          alt="recipe"
          onError={e => {
            e.currentTarget.src = recipePlaceholder;
          }}
        />
        <StyledLinkGoBack to={goBackLink.current} state={{ from: location }}>
          <img src={arrowBack} alt="arrow back" />
        </StyledLinkGoBack>
      </ImageWrapper>
      <InfoContainer>
        <Title>{recipeInfo.recipe.label}</Title>
        <BtnFavorite isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
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
