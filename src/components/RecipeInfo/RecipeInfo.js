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
    if (!userId) {
      toast('Please sign in to add recipes to favorites', {
        style: {
          borderRadius: '10px',
          background: '#F4C343',
          color: '#252525',
        },
      });
      return;
    }
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
    if (!userId) {
      toast('Please sign in to add ingredients to shopping list', {
        style: {
          borderRadius: '10px',
          background: '#F4C343',
          color: '#252525',
        },
      });
      return;
    }
    const selectRecipe = shoppingListRecipes.find(item => {
      return item.idLink === recipeInfo._links.self.href;
    });
    if (!selectRecipe) {
      dispatch(addRecipeItem({ userId, recipeInfo }));
      dispatch(addIngredients({ userId, recipeInfo }));
      toast.success('Recipe is successfully added to shopping list');
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
    </>
  );
};
