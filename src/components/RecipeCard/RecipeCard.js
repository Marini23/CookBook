import { useEffect } from 'react';
import {
  HeartIcon,
  Img,
  Label,
  ListItem,
  StyledHeartIcon,
  StyledHeartIconFavorite,
  StyledLinkList,
} from './RecipeCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoritesRecipes,
  selectFilteredRecipes,
  selectUserId,
} from '../../redux/selectors';

import {
  addFavoriteItem,
  deleteFavoriteItem,
} from '../../redux/favoritesSlice/favoritesOperations';
import { useLocation } from 'react-router-dom';

export const RecipeCard = recipe => {
  const dispatch = useDispatch();
  const location = useLocation();
  const filteredRecipes = useSelector(selectFilteredRecipes);
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  const userId = useSelector(selectUserId);
  // const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {}, [favoritesRecipes]);

  const isFavorite = favoritesRecipes.some(favItem => {
    return favItem._links.self.href === recipe.recipe._links.self.href;
  });

  const url = recipe.recipe._links.self.href;

  const getRecipeIdFromUrl = url => {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split('/');
    const recipeId = pathSegments[pathSegments.length - 1];
    return recipeId;
  };

  const recipeId = getRecipeIdFromUrl(url);

  const toggleFavorite = () => {
    const selectRecipe = filteredRecipes.find(item => {
      return item._links.self.href === recipe.recipe._links.self.href;
    });
    // setSelectedRecipe(selectRecipe);
    if (isFavorite) {
      const recipeId = favoritesRecipes.find(item => {
        return item._links.self.href === recipe.recipe._links.self.href;
      }).recipe.id;
      console.log(recipeId);
      // delete favorite
      dispatch(deleteFavoriteItem({ userId, recipeId }));
    } else {
      //  add favorite
      dispatch(addFavoriteItem({ userId, favoriteData: selectRecipe }));
    }
  };
  return (
    <>
      <ListItem>
        <StyledLinkList to={`/recipes/${recipeId}`} state={{ from: location }}>
          <Img
            src={recipe.recipe.recipe.image}
            alt={recipe.recipe.recipe.label}
          />
          <Label>{recipe.recipe.recipe.label.toUpperCase()}</Label>
        </StyledLinkList>
        <HeartIcon>
          {isFavorite ? (
            <StyledHeartIconFavorite
              onClick={toggleFavorite}
              onTouchStart={toggleFavorite}
            />
          ) : (
            <StyledHeartIcon
              onClick={toggleFavorite}
              onTouchStart={toggleFavorite}
            />
          )}
        </HeartIcon>
      </ListItem>
    </>
  );
};
