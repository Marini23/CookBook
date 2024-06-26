import { useState } from 'react';
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
  addFavoriteRecipe,
  deleteFavorites,
} from '../../redux/favoritesSlice/favoretesSlice';
import {
  addFavorite,
  addFavoriteRecipeLast,
  addFavoriteTest,
  addTest,
  writeFavoriteItem,
} from '../../redux/favoritesSlice/favoritesOperations';

export const RecipeCard = recipe => {
  const filteredRecipes = useSelector(selectFilteredRecipes);
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  const userId = useSelector(selectUserId);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const dispatch = useDispatch();
  const isFavorite = favoritesRecipes.some(
    favItem => favItem._links.self.href === recipe.recipe._links.self.href
  );
  // const toggleFavorite = () => {
  //   const selectRecipe = filteredRecipes.find(item => {
  //     return item._links.self.href === recipe.recipe._links.self.href;
  //   });
  //   setSelectedRecipe(selectRecipe);
  //   console.log(isFavorite);
  //   console.log(selectRecipe);
  //   if (isFavorite) {
  //     console.log('favorite - yes');
  //     // delete from favoritesRecipes
  //     dispatch(deleteFavorites(selectRecipe));
  //   } else {
  //     console.log('favorite - no');
  //     console.log(selectRecipe);
  //     // dispatch(addFavoriteRecipe(selectRecipe));
  //     dispatch(addFavorite(userId, selectedRecipe));
  //     const clickedItem = filteredRecipes.find(
  //       item => item._links.href === recipe.recipe._links.self.href
  //     );
  //     setSelectedRecipe(clickedItem);
  //     if (clickedItem) {
  //       console.log('favorite - yes-yes');
  //       // add in favoritesRecipes
  //       console.log(clickedItem);
  //       // dispatch(addFavoriteRecipe(selectedRecipe));
  //       dispatch(addFavorite(selectedRecipe));
  //     }
  //   }
  // };

  const toggleFavorite = () => {
    const selectRecipe = filteredRecipes.find(item => {
      return item._links.self.href === recipe.recipe._links.self.href;
    });
    setSelectedRecipe(selectRecipe);
    if (isFavorite) {
      // delete favorite
    } else {
      //  add favorite
      addFavorite(userId, selectRecipe);
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
