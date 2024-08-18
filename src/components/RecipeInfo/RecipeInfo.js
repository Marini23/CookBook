import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  DetailsContainer,
  ImageWrapper,
  Img,
  ImgDetail,
  InfoContainer,
  Item,
  Line,
  Link,
  ListIngredients,
  SaveBtn,
  SaveBtnContainer,
  SaveBtnText,
  StyledHeart,
  StyledHeartIcon,
  StyledHeartIconFavorite,
  StyledLinkGoBack,
  TextDetail,
  TextDiets,
  TextIngredients,
  Title,
  TitleIngredients,
} from './RecipeInfo.styled';
import { useEffect, useRef } from 'react';
import arrowBack from '../../images/arrow_back.svg';
import plusIcon from '../../images/plus_icon.svg';
import timeIcon from '../../images/clock.svg';
import caloriesIcon from '../../images/calories.svg';
import servesIcon from '../../images/serves.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoritesRecipes,
  selectFilteredRecipes,
  selectRecipesInShoppingList,
  selectUserId,
} from '../../redux/selectors';
import {
  addFavoriteItem,
  deleteFavoriteItem,
} from '../../redux/favoritesSlice/favoritesOperations';
import {
  addIngredients,
  addRecipeItem,
} from '../../redux/shoppingSlice/shoppingOperations';

export const RecipeInfo = ({ recipeInfo }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? `/`);
  const filteredRecipes = useSelector(selectFilteredRecipes);
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  const shoppingListRecipes = useSelector(selectRecipesInShoppingList);
  const userId = useSelector(selectUserId);

  useEffect(() => {}, [favoritesRecipes]);

  const isFavorite = favoritesRecipes.some(favItem => {
    return favItem._links.self.href === recipeInfo._links.self.href;
  });

  const toggleFavorite = () => {
    const selectRecipe = filteredRecipes.find(item => {
      return item._links.self.href === recipeInfo._links.self.href;
    });
    console.log(selectRecipe);
    if (isFavorite) {
      const recipeId = favoritesRecipes.find(item => {
        return item._links.self.href === recipeInfo._links.self.href;
      }).recipe.id;
      console.log(recipeId);
      // delete favorite
      dispatch(deleteFavoriteItem({ userId, recipeId }));
    } else {
      //  add favorite
      dispatch(addFavoriteItem({ userId, favoriteData: selectRecipe }));
    }
  };

  const handleIngredients = recipeInfo => {
    console.log(shoppingListRecipes);
    const selectRecipe = shoppingListRecipes.find(item => {
      return item.idLink === recipeInfo._links.self.href;
    });
    console.log(selectRecipe);
    if (!selectRecipe) {
      dispatch(addRecipeItem({ userId, recipeInfo }));
      dispatch(addIngredients({ userId, recipeInfo }));
    } else {
      toast('Recipe is already added to shopping list');
    }
  };

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
        <StyledHeart>
          {isFavorite ? (
            <StyledHeartIconFavorite onClick={toggleFavorite} />
          ) : (
            <StyledHeartIcon onClick={toggleFavorite} />
          )}
        </StyledHeart>
      </ImageWrapper>
      <InfoContainer>
        <SaveBtnContainer>
          <SaveBtnText>Save Ingredients to Shopping List</SaveBtnText>
          <SaveBtn type="button" onClick={() => handleIngredients(recipeInfo)}>
            {' '}
            <img src={plusIcon} alt=" plus icon" />
          </SaveBtn>
        </SaveBtnContainer>
        <Title>{recipeInfo.recipe.label}</Title>
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
      <Link href={link} target="_blank" rel="noopener noreferrer">
        Start Cooking
      </Link>
    </div>
  );
};
