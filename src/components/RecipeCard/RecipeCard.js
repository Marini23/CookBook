import { useEffect, useState } from 'react';
import {
  HeartIcon,
  Img,
  Label,
  ListItem,
  StyledHeartIcon,
  StyledHeartIconFavorite,
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

export const RecipeCard = recipe => {
  const dispatch = useDispatch();
  const filteredRecipes = useSelector(selectFilteredRecipes);
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  const userId = useSelector(selectUserId);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {}, [favoritesRecipes]);

  const isFavorite = favoritesRecipes.some(favItem => {
    return favItem.href === recipe.recipe._links.self.href;
  });

  const toggleFavorite = () => {
    const selectRecipe = filteredRecipes.find(item => {
      return item._links.self.href === recipe.recipe._links.self.href;
    });
    setSelectedRecipe(selectRecipe);
    if (isFavorite) {
      console.log(selectRecipe);
      const recipeId = favoritesRecipes.find(item => {
        return item.href === recipe.recipe._links.self.href;
      }).id;
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
        <Img
          src={recipe.recipe.recipe.image}
          alt={recipe.recipe.recipe.label}
        />
        <Label>{recipe.recipe.recipe.label.toUpperCase()}</Label>
        <HeartIcon>
          {isFavorite ? (
            <StyledHeartIconFavorite onClick={toggleFavorite} />
          ) : (
            <StyledHeartIcon onClick={toggleFavorite} />
          )}
        </HeartIcon>
      </ListItem>
    </>
  );
};
