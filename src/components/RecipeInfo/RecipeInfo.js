import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect, useRef } from 'react';
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
import { InfoTabletDesktop } from './InfoTabletDesktop';
import { InfoMobile } from './InfoMobile';

export const RecipeInfo = ({ recipeInfo }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? `/`);
  const filteredRecipes = useSelector(selectFilteredRecipes);
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  const shoppingListRecipes = useSelector(selectRecipesInShoppingList);
  const userId = useSelector(selectUserId);
  const isTabletOrDesktop = useMediaQuery({ minWidth: 744 });
  useEffect(() => {}, [favoritesRecipes]);

  const isFavorite = favoritesRecipes.some(favItem => {
    return favItem._links.self.href === recipeInfo._links.self.href;
  });

  const toggleFavorite = () => {
    const selectRecipe = filteredRecipes.find(item => {
      return item._links.self.href === recipeInfo._links.self.href;
    });
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
    const selectRecipe = shoppingListRecipes.find(item => {
      return item.idLink === recipeInfo._links.self.href;
    });
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

  const commonProps = {
    recipeInfo,
    goBackLink,
    isFavorite,
    toggleFavorite,
    handleIngredients,
    diets,
    link,
  };

  return (
    <>
      {isTabletOrDesktop ? (
        <InfoTabletDesktop {...commonProps} />
      ) : (
        <InfoMobile {...commonProps} />
      )}
      {/* <ImageWrapper>
        <Img src={recipeInfo.recipe.images.REGULAR.url} alt="recipe" />
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
      <SaveBtn type="button" onClick={() => handleIngredients(recipeInfo)}>
        <ImgList src={listIcon} alt=" plus icon" />
        <SaveBtnText>Save Ingredients to Shopping List</SaveBtnText>
      </SaveBtn>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        Start Cooking
      </Link> */}
    </>
  );
};
