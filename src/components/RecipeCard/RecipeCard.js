import { useState } from 'react';
import {
  HeartIcon,
  Img,
  Label,
  ListItem,
  StyledHeartIcon,
} from './RecipeCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoritesRecipes,
  selectFilteredRecipes,
} from '../../redux/selectors';
import { addFavorite } from '../../redux/favoritesSlice/favoritesOperations';

export const RecipeCard = recipe => {
  const filteredRecipes = useSelector(selectFilteredRecipes);
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const dispatch = useDispatch();

  // const handleFavoriteRecipe = id => {
  //   const selectRecipe = filteredRecipes.find(
  //     item => item.recipe._links.href === recipe.recipe._links.href
  //   );
  //   setSelectedRecipe(selectRecipe);
  // };

  // const toggleFavorite = () => {
  //   if (isFavorite) {
  //     dispatch(deleteFavorites(recipe));
  //   } else {
  //     dispatch(addFavorites(recipe));
  //   }
  // };

  const toggleFavorite = () => {
    const isFavorite = favoritesRecipes.some(
      favItem => recipe._links.href === recipe.recipe._links.href
    );
    const selectRecipe = filteredRecipes.find(
      item => item.recipe._links.href === recipe.recipe._links.href
    );
    setSelectedRecipe(selectRecipe);
    console.log(isFavorite);
    if (isFavorite) {
      // setFavList(prevFavList =>
      //   prevFavList.filter(item => item.recipe._links.href !== id)
      // );
      // delete from favoritesRecipes
    } else {
      const clickedItem = filteredRecipes.find(
        item => item.recipe._links.href === recipe.recipe._links.href
      );
      setSelectedRecipe(selectRecipe);
      if (clickedItem) {
        // setFavList(prevFavList => [...prevFavList, clickedItem]);
        // add in favoritesRecipes
        dispatch(addFavorite(selectedRecipe));
      }
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
        <HeartIcon onClick={toggleFavorite}>
          <StyledHeartIcon />
        </HeartIcon>
      </ListItem>
    </>
  );
};
