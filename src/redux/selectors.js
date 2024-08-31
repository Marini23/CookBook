import { createSelector } from '@reduxjs/toolkit';
import { getFirstName } from 'utils';

export const selectUser = state => state.auth.user;

export const selectUserId = state => state.auth.user.id;

export const selectUserName = state => state.auth.user.name;

export const selectErrorAuth = state => state.auth.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectResipes = state => state.recipes.recipesList;

export const selectIsLoadingRecipes = state => state.recipes.isLoading;

export const selectIsLoadingFavorites = state => state.favorites.isLoading;

export const selectIsLoadingShoppingList = state =>
  state.shoppingList.isLoading;

export const selectErrorRecipes = state => state.recipes.error;

export const selectErrorShoppingList = state => state.shoppingList.error;

export const selectNextPageLink = state => state.recipes.nextPageLink;

export const selectTotalHits = state => state.recipes.totalHits;

export const selectQuery = state => state.recipes.query;

export const selectFilters = state => state.filter;

export const selectFavoritesRecipes = state => state.favorites.favoritesList;

export const selectRecipesInShoppingList = state =>
  state.shoppingList.addedRecipestoShoppingList;

export const selectIngredientsInShoppingList = state =>
  state.shoppingList.ingredientsList;

export const selectUserFirstName = createSelector([selectUser], user =>
  getFirstName(user.name)
);

export const selectFilteredRecipes = createSelector(
  [selectResipes, selectFilters],
  (recipes, filters) => {
    return recipes
      .filter(recipe =>
        filters.caloriesFrom
          ? recipe.recipe.calories > filters.caloriesFrom
          : true
      )
      .filter(recipe =>
        filters.caloriesTo ? recipe.recipe.calories < filters.caloriesTo : true
      )
      .filter(recipe =>
        filters.ingredientsTo
          ? recipe.recipe.ingredients.length >= filters.ingredientsTo
          : true
      )
      .filter(recipe => {
        if (filters.diet && filters.diet.length > 0) {
          return filters.diet.every(item =>
            recipe.recipe.dietLabels.includes(item)
          );
        }
        return true;
      })
      .filter(recipe => {
        if (filters.allergies && filters.allergies.length > 0) {
          return filters.allergies.every(item =>
            recipe.recipe.healthLabels.includes(item)
          );
        }
        return true;
      });
  }
);
